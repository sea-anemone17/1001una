import {
  STORAGE_KEYS,
  CURRENT_SCHEMA_VERSION,
  DEFAULT_USER_DATA
} from "./storage-keys.js";

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeDefaults(data) {
  return {
    ...deepClone(DEFAULT_USER_DATA),
    ...data,
    progress: {
      ...DEFAULT_USER_DATA.progress,
      ...(data.progress || {})
    },
    settings: {
      ...DEFAULT_USER_DATA.settings,
      ...(data.settings || {})
    },
    tagMastery: data.tagMastery || {},
    gateResults: data.gateResults || {},
    wrongLogs: data.wrongLogs || [],
    mistakeLogs: data.mistakeLogs || [],
    confidenceLogs: data.confidenceLogs || [],
    achievements: data.achievements || []
  };
}

export function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_DATA);

    if (!raw) {
      const freshData = deepClone(DEFAULT_USER_DATA);
      saveUserData(freshData);
      return freshData;
    }

    const parsed = JSON.parse(raw);
    const migrated = migrateUserData(parsed);
    const merged = mergeDefaults(migrated);

    saveUserData(merged);
    return merged;
  } catch (error) {
    console.error("사용자 데이터를 불러오지 못했습니다.", error);

    const fallback = deepClone(DEFAULT_USER_DATA);
    saveUserData(fallback);
    return fallback;
  }
}

export function saveUserData(data) {
  const safeData = {
    ...data,
    schemaVersion: CURRENT_SCHEMA_VERSION
  };

  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(safeData));
  return safeData;
}

export function backupUserData() {
  const data = loadUserData();
  localStorage.setItem(STORAGE_KEYS.USER_BACKUP, JSON.stringify(data));
  return data;
}

export function resetUserData() {
  const freshData = deepClone(DEFAULT_USER_DATA);
  saveUserData(freshData);
  return freshData;
}

export function updateUserData(updater) {
  const current = loadUserData();
  const next = updater(current);

  return saveUserData(next);
}

export function markSentenceViewed(sentenceId) {
  return updateUserData(data => {
    const id = Number(sentenceId);

    if (!data.progress.viewedSentences.includes(id)) {
      data.progress.viewedSentences.push(id);
    }

    return data;
  });
}

export function logWrongAnswer(log) {
  return updateUserData(data => {
    data.wrongLogs.push({
      id: createLogId("WRONG"),
      date: new Date().toISOString(),
      ...log
    });

    return data;
  });
}

export function logMistake(log) {
  return updateUserData(data => {
    data.mistakeLogs.push({
      id: createLogId("MISTAKE"),
      date: new Date().toISOString(),
      ...log
    });

    return data;
  });
}

export function updateTagMastery(tagId, result) {
  return updateUserData(data => {
    if (!data.tagMastery[tagId]) {
      data.tagMastery[tagId] = {
        attempts: 0,
        correct: 0,
        wrong: 0,
        lowConfidence: 0,
        level: 1
      };
    }

    const mastery = data.tagMastery[tagId];

    mastery.attempts += 1;

    if (result === "correct") mastery.correct += 1;
    if (result === "wrong") mastery.wrong += 1;
    if (result === "lowConfidence") mastery.lowConfidence += 1;

    mastery.level = calculateMasteryLevel(mastery);

    return data;
  });
}

function calculateMasteryLevel(mastery) {
  const score =
    mastery.correct * 2 -
    mastery.wrong -
    Math.floor(mastery.lowConfidence * 0.5);

  if (score >= 20) return 5;
  if (score >= 12) return 4;
  if (score >= 6) return 3;
  if (score >= 2) return 2;
  return 1;
}

function migrateUserData(data) {
  if (!data.schemaVersion) {
    data.schemaVersion = 1;
  }

  // 나중에 schemaVersion 2, 3이 생기면 여기에 추가
  // if (data.schemaVersion === 1) { ... data.schemaVersion = 2; }

  return data;
}

function createLogId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
