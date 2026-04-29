import fs from "fs";
import path from "path";

const INPUT_PATH = path.join("raw", "cheonilmun-essential.txt");
const OUTPUT_DIR = path.join("data", "generated");

const raw = fs.readFileSync(INPUT_PATH, "utf-8");

function cleanLine(line) {
  return line
    .replace(/\u00a0/g, " ")
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pad3(num) {
  return String(num).padStart(3, "0");
}

const lines = raw
  .split(/\r?\n/)
  .map(cleanLine)
  .filter(Boolean);

const chapters = [];
const sentences = [];

let currentChapter = null;
let pendingSentenceNumber = null;
let pendingSentenceLines = [];

function savePendingSentence() {
  if (!pendingSentenceNumber || !pendingSentenceLines.length) return;

  const text = pendingSentenceLines.join(" ").replace(/\s+/g, " ").trim();

  sentences.push({
    id: Number(pendingSentenceNumber),
    displayId: pad3(pendingSentenceNumber),
    chapterId: currentChapter?.id || "UNKNOWN",
    text,
    translation: "",
    tagIds: []
  });

  if (currentChapter) {
    currentChapter.sentenceIds.push(Number(pendingSentenceNumber));
  }

  pendingSentenceNumber = null;
  pendingSentenceLines = [];
}

function makeChapterId(number) {
  return `CH${String(number).padStart(2, "0")}`;
}

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];

  if (line === "No.") {
    savePendingSentence();

    const nextLine = lines[i + 1] || "";
    const match = nextLine.match(/^(\d{1,2})\s+(.+)$/);

    if (match) {
      const chapterNumber = Number(match[1]);
      const title = match[2].trim();

      currentChapter = {
        id: makeChapterId(chapterNumber),
        number: chapterNumber,
        title,
        sentenceIds: []
      };

      chapters.push(currentChapter);
      i += 1;
    }

    continue;
  }

  const numberMatch = line.match(/^(\d{3})$/);

  if (numberMatch) {
    savePendingSentence();
    pendingSentenceNumber = Number(numberMatch[1]);
    pendingSentenceLines = [];
    continue;
  }

  if (pendingSentenceNumber) {
    pendingSentenceLines.push(line);
  }
}

savePendingSentence();

const duplicateIds = findDuplicates(sentences.map(sentence => sentence.id));
const missingIds = findMissingIds(sentences.map(sentence => sentence.id), 1, 500);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const chaptersOutput = `export const GENERATED_CHAPTERS = ${JSON.stringify(chapters, null, 2)};\n`;
const sentencesOutput = `export const GENERATED_SENTENCES = ${JSON.stringify(sentences, null, 2)};\n`;

fs.writeFileSync(path.join(OUTPUT_DIR, "chapters.generated.js"), chaptersOutput, "utf-8");
fs.writeFileSync(path.join(OUTPUT_DIR, "sentences.generated.js"), sentencesOutput, "utf-8");

console.log("✅ 변환 완료");
console.log(`챕터 수: ${chapters.length}`);
console.log(`문장 수: ${sentences.length}`);

if (duplicateIds.length) {
  console.warn("⚠️ 중복 문장 번호:", duplicateIds);
}

if (missingIds.length) {
  console.warn("⚠️ 누락 문장 번호:", missingIds);
}

function findDuplicates(values) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  return [...duplicates];
}

function findMissingIds(values, start, end) {
  const set = new Set(values);
  const missing = [];

  for (let id = start; id <= end; id += 1) {
    if (!set.has(id)) missing.push(id);
  }

  return missing;
}
