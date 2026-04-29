import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { ANALYSES_CHAPTER_01 } from "../data/analyses/analysis-chapter-01.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getSentence(sentenceId) {
  return GENERATED_SENTENCES.find(sentence => sentence.id === Number(sentenceId));
}

function getTag(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId);
}

function getAnalysis(sentenceId) {
  return ANALYSES_CHAPTER_01?.[Number(sentenceId)] || null;
}

function renderTagBadges(tagIds = []) {
  if (!tagIds.length) {
    return `<span class="badge">태그 미등록</span>`;
  }

  return tagIds.map(tagId => {
    const tag = getTag(tagId);
    return `<span class="badge">${escapeHTML(tag?.label || tagId)}</span>`;
  }).join("");
}

function renderBasicAnalysis(analysis) {
  if (!analysis?.basic) {
    return `
      <section class="card">
        <h3>기본 분석</h3>
        <p class="muted">
          아직 이 문장의 기본 분석이 등록되지 않았습니다.
        </p>
      </section>
    `;
  }

  return `
    <section class="card">
      <h3>기본 분석</h3>
      <p>${escapeHTML(analysis.basic.summary || "")}</p>

      ${
        analysis.basic.keyPoints?.length
          ? `
            <h4>핵심 포인트</h4>
            <ul>
              ${analysis.basic.keyPoints.map(point => `<li>${escapeHTML(point)}</li>`).join("")}
            </ul>
          `
          : ""
      }

      ${
        analysis.basic.memoryHook
          ? `
            <h4>암기 훅</h4>
            <p class="analysis-box">${escapeHTML(analysis.basic.memoryHook)}</p>
          `
          : ""
      }
    </section>
  `;
}

function renderDeepAnalysis(analysis) {
  if (!analysis?.deep) {
    return `
      <section class="card">
        <h3>심화 분석</h3>
        <p class="muted">
          아직 이 문장의 심화 분석이 등록되지 않았습니다.
        </p>
      </section>
    `;
  }

  const chunks = analysis.deep.chunks?.length
    ? analysis.deep.chunks.map(chunk => `
        <li>
          <strong>${escapeHTML(chunk.role)}</strong>:
          ${escapeHTML(chunk.text)}
          ${chunk.note ? `<p class="muted">${escapeHTML(chunk.note)}</p>` : ""}
        </li>
      `).join("")
    : `<li class="muted">성분 분석이 아직 등록되지 않았습니다.</li>`;

  const grammarPoints = analysis.deep.grammarPoints?.length
    ? analysis.deep.grammarPoints.map(point => {
        const tag = getTag(point.tagId);

        return `
          <article class="analysis-box">
            <p><strong>${escapeHTML(tag?.label || point.tagId)}</strong></p>
            ${point.evidence ? `<p class="code">${escapeHTML(point.evidence)}</p>` : ""}
            <p>${escapeHTML(point.explanation || "")}</p>
          </article>
        `;
      }).join("")
    : `<p class="muted">문법 포인트가 아직 등록되지 않았습니다.</p>`;

  return `
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

export function renderSentenceAnalysisView(sentenceId) {
  const sentence = getSentence(sentenceId);
  const analysis = getAnalysis(sentenceId);

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
        ← 챕터로
      </button>

      <h2>문장 ${escapeHTML(sentence.displayId || sentence.id)} 분석</h2>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>

      ${
        sentence.translation
          ? `<p class="muted">${escapeHTML(sentence.translation)}</p>`
          : `<p class="muted">해석은 아직 등록되지 않았습니다.</p>`
      }

      <div class="badge-row">
        ${renderTagBadges(sentence.tagIds)}
      </div>

      <div class="button-row">
        <button data-action="go-application" data-sentence-id="${sentence.id}">
          적용 문제 풀기 →
        </button>
      </div>
    </section>

    ${renderBasicAnalysis(analysis)}
    ${renderDeepAnalysis(analysis)}
  `;
}
