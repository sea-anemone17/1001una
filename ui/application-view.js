import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

const APPLICATIONS = [];

function getApplicationsBySentence(sentenceId) {
  return APPLICATIONS.filter(app => app.sentenceId === Number(sentenceId));
}

function getSentence(sentenceId) {
  return GENERATED_SENTENCES.find(sentence => sentence.id === Number(sentenceId));
}

function getTag(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId);
}

export function renderApplicationView(sentenceId) {
  const sentence = getSentence(sentenceId);
  const applications = getApplicationsBySentence(sentenceId);

  if (!sentence) {
    return `
      <section class="card">
        <h2>문장을 찾을 수 없습니다.</h2>
        <button data-action="go-home">홈으로</button>
      </section>
    `;
  }

  if (!applications.length) {
    return `
      <section class="card">
        <button class="secondary" data-action="go-sentence" data-sentence-id="${sentence.id}">
          ← 문장 분석으로
        </button>
        <h2>적용 문제 준비 중</h2>
        <p class="sentence-text">${escapeHTML(sentence.text)}</p>
        <p class="muted">${escapeHTML(sentence.translation || "")}</p>
        <p class="muted">
          아직 이 문장에는 적용 문제가 등록되지 않았습니다.
          현재는 문장 분석, 초벌 태그, 시험 포인트 확인을 먼저 사용할 수 있습니다.
        </p>
      </section>
    `;
  }

  const questionCards = applications.map((question, qIndex) => {
    const tag = getTag(question.tagId);

    return `
      <article class="card application-question" data-question-id="${escapeHTML(question.id)}">
        <div class="badge-row">
          <span class="badge">${escapeHTML(question.id)}</span>
          <span class="badge">${escapeHTML(tag?.label || question.tagId)}</span>
        </div>

        <h3>문제 ${qIndex + 1}</h3>
        <p>${escapeHTML(question.prompt)}</p>

        <div class="choice-list">
          ${question.choices.map((choice, index) => `
            <button
              class="choice-button secondary"
              data-action="check-application"
              data-question-id="${escapeHTML(question.id)}"
              data-choice-index="${index}"
            >
              ${index + 1}. ${escapeHTML(choice)}
            </button>
          `).join("")}
        </div>

        <div class="feedback-box" id="feedback-${escapeHTML(question.id)}"></div>
      </article>
    `;
  }).join("");

  return `
    <section class="card">
      <button class="secondary" data-action="go-sentence" data-sentence-id="${sentence.id}">
        ← 문장 분석으로
      </button>

      <h2>적용 훈련</h2>
      <p class="sentence-text">${escapeHTML(sentence.text)}</p>
      <p class="muted">${escapeHTML(sentence.translation || "해석은 아직 등록되지 않았습니다.")}</p>
    </section>

    ${questionCards}
  `;
}

export function getApplicationById(questionId) {
  return APPLICATIONS.find(question => question.id === questionId) || null;
}
