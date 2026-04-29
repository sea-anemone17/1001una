import { CHAPTERS } from "../data/chapters.js";
import { SENTENCES_CHAPTER_01 } from "../data/sentences/chapter-01.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getSentencesByChapter(chapterId) {
  if (chapterId === "CH01") return SENTENCES_CHAPTER_01;
  return [];
}

function getTagLabel(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId)?.label || tagId;
}

export function renderChapterView(chapterId) {
  const chapter = CHAPTERS.find(item => item.id === chapterId);
  const sentences = getSentencesByChapter(chapterId);

  if (!chapter) {
    return `
      <section class="card">
        <h2>챕터를 찾을 수 없습니다.</h2>
        <button data-action="go-home">홈으로</button>
      </section>
    `;
  }

  const sentenceItems = sentences.map(sentence => `
    <button class="sentence-item" data-action="go-sentence" data-sentence-id="${sentence.id}">
      <span class="badge">문장 ${sentence.id}</span>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>
      <p class="muted">${escapeHTML(sentence.translation)}</p>
      <div class="badge-row">
        ${sentence.tagIds.map(tagId => `
          <span class="badge">${escapeHTML(getTagLabel(tagId))}</span>
        `).join("")}
      </div>
    </button>
  `).join("");

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>${escapeHTML(chapter.title)}</h2>
      <p class="muted">${escapeHTML(chapter.description)}</p>
    </section>

    <section class="sentence-list">
      ${sentenceItems}
    </section>
  `;
}
