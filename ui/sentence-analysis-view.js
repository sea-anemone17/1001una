import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { GENERATED_SENTENCE_TAGS } from "../data/generated/sentence-tags.generated.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getSentence(sentenceId) {
  return GENERATED_SENTENCES.find(sentence => sentence.id === Number(sentenceId));
}

function getSentenceTagData(sentenceId) {
  return GENERATED_SENTENCE_TAGS?.[Number(sentenceId)] || null;
}

function getTag(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId);
}

function renderTagBadges(tagIds = [], emptyText = "없음") {
  if (!tagIds.length) {
    return `<span class="badge">${escapeHTML(emptyText)}</span>`;
  }

  return tagIds.map(tagId => {
    const tag = getTag(tagId);
    return `
      <span class="badge" title="${escapeHTML(tagId)}">
        ${escapeHTML(tag?.label || tagId)}
      </span>
    `;
  }).join("");
}

function renderList(title, items = [], emptyText = "등록된 내용이 없습니다.") {
  return `
    <section class="card">
      <h3>${escapeHTML(title)}</h3>
      ${
        items.length
          ? `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
          : `<p class="muted">${escapeHTML(emptyText)}</p>`
      }
    </section>
  `;
}

function renderSentenceTags(tagData) {
  if (!tagData) {
    return `
      <section class="card">
        <h3>초벌 태깅 정보</h3>
        <p class="muted">아직 이 문장의 태깅 정보가 없습니다.</p>
      </section>
    `;
  }

  return `
    <section class="card">
      <h3>초벌 태깅 정보</h3>

      <h4>확정 태그</h4>
      <div class="badge-row">
        ${renderTagBadges(tagData.tagIds, "확정 태그 없음")}
      </div>

      <h4>보조 태그</h4>
      <div class="badge-row">
        ${renderTagBadges(tagData.subTagIds, "보조 태그 없음")}
      </div>

      <h4>후보 태그</h4>
      <div class="badge-row">
        ${renderTagBadges(tagData.candidateTagIds, "후보 태그 없음")}
      </div>

      <h4>비교 개념 ID</h4>
      <div class="badge-row">
        ${renderTagBadges(tagData.contrastTagIds, "비교 개념 없음")}
      </div>

      <h4>변형 규칙 ID</h4>
      <div class="badge-row">
        ${renderTagBadges(tagData.transformableRuleIds, "변형 규칙 없음")}
      </div>

      <div class="badge-row">
        <span class="badge">난도: ${escapeHTML(tagData.difficulty || "미정")}</span>
        <span class="badge">위험도: ${escapeHTML(String(tagData.risk ?? "-"))}</span>
        <span class="badge">상태: ${escapeHTML(tagData.reviewStatus || "draft")}</span>
      </div>
    </section>
  `;
}

function renderTranslationChunks(sentence) {
  if (!sentence.translationChunks?.length) return "";

  return `
    <h4>직독직해 청크</h4>
    <ul>
      ${sentence.translationChunks.map(chunk => {
        const text = typeof chunk === "string" ? chunk : chunk.text;
        return `<li>${escapeHTML(text || "")}</li>`;
      }).join("")}
    </ul>
  `;
}

export function renderSentenceAnalysisView(sentenceId) {
  const sentence = getSentence(sentenceId);
  const tagData = getSentenceTagData(sentenceId);

  if (!sentence) {
    return `
      <section class="card">
        <h2>문장을 찾을 수 없습니다.</h2>
        <button data-action="go-home">홈으로</button>
      </section>
    `;
  }

  return `
    <section class="card">
      <button class="secondary" data-action="go-chapter" data-chapter-id="${sentence.chapterId}">
        ← 유닛으로
      </button>

      <h2>문장 ${escapeHTML(sentence.displayId || sentence.id)} 분석</h2>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>

      ${
        sentence.translation
          ? `<p class="muted">${escapeHTML(sentence.translation)}</p>`
          : `<p class="muted">해석은 아직 등록되지 않았습니다.</p>`
      }

      ${renderTranslationChunks(sentence)}

      <div class="button-row">
        <button data-action="go-application" data-sentence-id="${sentence.id}">
          적용 문제 풀기 →
        </button>
      </div>
    </section>

    ${renderSentenceTags(tagData)}
    ${renderList("시험 포인트", tagData?.examPoints || [], "아직 시험 포인트가 없습니다.")}
    ${renderList("함정 포인트", tagData?.traps || [], "아직 함정 포인트가 없습니다.")}

    <section class="card">
      <h3>정밀 분석</h3>
      <p class="muted">
        현재 이 화면은 500문장 초벌 태깅을 우선 표시합니다.
        문장별 세부 성분 분석은 이후 별도 분석 DB로 확장할 수 있습니다.
      </p>
    </section>
  `;
}
