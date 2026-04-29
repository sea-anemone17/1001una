import { GENERATED_CHAPTERS } from "../data/generated/chapters.generated.js";
import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getSentencesByChapter(chapterId) {
  return GENERATED_SENTENCES.filter(sentence => sentence.chapterId === chapterId);
}

function getTagLabel(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId)?.label || tagId;
}

export function renderChapterView(chapterId) {
  const chapter = GENERATED_CHAPTERS.find(item => item.id === chapterId);
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
      <span class="badge">${escapeHTML(sentence.displayId || sentence.id)}</span>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>

      ${
        sentence.translation
          ? `<p class="muted">${escapeHTML(sentence.translation)}</p>`
          : `<p class="muted">해석은 아직 등록되지 않았습니다.</p>`
      }

      <div class="badge-row">
        ${
          sentence.tagIds?.length
            ? sentence.tagIds.map(tagId => `
                <span class="badge">${escapeHTML(getTagLabel(tagId))}</span>
              `).join("")
            : `<span class="badge">태그 미등록</span>`
        }
      </div>
    </button>
  `).join("");

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>${escapeHTML(chapter.number)}. ${escapeHTML(chapter.title)}</h2>
      <p class="muted">${sentences.length}문장</p>

      <div class="button-row">
        <button data-action="go-advanced-gate" data-chapter-id="${chapter.id}">
          심화 관문 →
        </button>
      </div>
    </section>

    <section class="sentence-list">
      ${sentenceItems}
    </section>
  `;
}
