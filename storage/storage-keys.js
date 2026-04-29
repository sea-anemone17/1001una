export const STORAGE_KEYS = {
  USER_DATA: "1001una_v2_user_data",
  USER_BACKUP: "1001una_v2_user_backup"
};

export const CURRENT_SCHEMA_VERSION = 1;

export const DEFAULT_USER_DATA = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  appVersionAtLastUse: "0.1.0",

  learnerProfile: null,

  progress: {
    viewedSentences: [],
    completedApplications: [],
    completedChapters: []
  },

  wrongLogs: [],
  mistakeLogs: [],
  confidenceLogs: [],

  tagMastery: {},

  gateResults: {},

  achievements: [],

  settings: {
    analysisDepth: "basic",
    theme: "default"
  }
};
