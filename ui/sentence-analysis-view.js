import { SENTENCES_CHAPTER_01 } from "../data/sentences/chapter-01.js";
import { ANALYSES_CHAPTER_01 } from "../data/analyses/analysis-chapter-01.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getSentence(sentenceId) {
  return SENTENCES_CHAPTER_01.find(sentence => sentence.id === Number(sentenceId));
}

function getTag(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId);
}

function renderTagBadges(tagIds = []) {
  return tagIds.map(tagId => {
    const tag = getTag(tagId);
    return `<span class="badge">${escapeHTML(tag?.label || tagId)}</span>`;
  }).join("");
}

export function renderSentenceAnalysisView(sentenceId) {
  const sentence = getSentence(sentenceId);
  const analysis = ANALYSES_CHAPTER_01[sentenceId];

  if (!sentence || !analysis) {
    return `
      <section class="card">
        <h2>문장 분석을 찾을 수 없습니다.</h2>
        <button data-action="go-home">홈으로</button>
      </section>
    `;
  }

  const chunks = analysis.deep.chunks.map(chunk => `
    <li>
      <strong>${escapeHTML(chunk.role)}</strong>:
      ${escapeHTML(chunk.text)}
      ${chunk.note ? `<p class="muted">${escapeHTML(chunk.note)}</p>` : ""}
    </li>
  `).join("");

  const grammarPoints = analysis.deep.grammarPoints.map(point => {
    const tag = getTag(point.tagId);

    return `
      <article class="analysis-box">
        <p><strong>${escapeHTML(tag?.label || point.tagId)}</strong></p>
        <p class="code">${escapeHTML(point.evidence)}</p>
        <p>${escapeHTML(point.explanation)}</p>
      </article>
    `;
  }).join("");

  return `
    <section class="card">
      <button class="secondary" data-action="go-chapter" data-chapter-id="${sentence.chapterId}">
        ← 챕터로
      </button>

      <h2>문장 ${sentence.id} 분석</h2>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>
      <p class="muted">${escapeHTML(sentence.translation)}</p>

      <div class="badge-row">
        ${renderTagBadges(sentence.tagIds)}
      </div>
      
      <div class="button-row">
        <button data-action="go-application" data-sentence-id="${sentence.id}">
          적용 문제 풀기 →
        </button>
      </div>
    </section>

    <section class="card">
      <h3>기본 분석</h3>
      <p>${escapeHTML(analysis.basic.summary)}</p>

      <h4>핵심 포인트</h4>
      <ul>
        ${analysis.basic.keyPoints.map(point => `<li>${escapeHTML(point)}</li>`).join("")}
      </ul>

      <h4>암기 훅</h4>
      <p class="analysis-box">${escapeHTML(analysis.basic.memoryHook)}</p>
    </section>

    <section class="card">
      <h3>심화 분석</h3>

      <h4>성분 분석</h4>
      <ul class="chunk-list">
        ${chunks}
      </ul>

      <h4>문법 포인트</h4>
      ${grammarPoints}
    </section>
  `;
}
