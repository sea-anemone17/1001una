import { buildChapterGateQuestion } from "../engine/mutation-engine.js";
import { loadUserData } from "../storage/db.js";
import { renderStars } from "../engine/reward-engine.js";
import { escapeHTML } from "../utils/sanitize.js";

function getAttemptSeed(chapterId) {
  const data = loadUserData();
  const gate = data.gateResults?.[`GATE-${chapterId}`];
  return gate?.attempts || 0;
}

function renderGateHistory(chapterId) {
  const data = loadUserData();
  const gate = data.gateResults?.[`GATE-${chapterId}`];

  if (!gate) return `<p class="muted">아직 심화 관문 기록이 없습니다.</p>`;

  return `
    <div class="badge-row">
      <span class="badge">도전 ${gate.attempts}회</span>
      <span class="badge">최고 기록 ${renderStars(gate.bestStars || 1)}</span>
    </div>
  `;
}

export function renderAdvancedGateView(chapterId = "CH01", confidence = null) {
  if (!confidence) {
    return `
      <section class="card">
        <button class="secondary" data-action="go-home">← 홈</button>
        <h2>심화 관문: 챕터별 어법 변형</h2>
        <p class="muted">
          실제 내신형처럼 문장 일부가 교묘하게 바뀐 선지를 찾아냅니다. 아직 자신 없어도 입장할 수 있어요.
        </p>
        ${renderGateHistory(chapterId)}
      </section>

      <section class="card">
        <h3>이 챕터에 자신 있나요?</h3>
        <p class="muted">이 선택은 점수 제한이 아니라 메타인지 기록용입니다.</p>
        <div class="button-row">
          <button data-action="choose-gate-confidence" data-chapter-id="${chapterId}" data-confidence="HIGH">충분히 준비됨</button>
          <button data-action="choose-gate-confidence" data-chapter-id="${chapterId}" data-confidence="MID">조금 불안함</button>
          <button data-action="choose-gate-confidence" data-chapter-id="${chapterId}" data-confidence="LOW">아직 자신 없음</button>
        </div>
      </section>
    `;
  }

  const question = buildChapterGateQuestion(chapterId, getAttemptSeed(chapterId));

  if (!question) {
    return `
      <section class="card">
        <button class="secondary" data-action="go-chapter" data-chapter-id="${escapeHTML(chapterId)}">
          ← 유닛으로
        </button>
        <h2>심화 관문 준비 중</h2>
        <p class="muted">
          이 유닛에는 아직 변형 문제가 등록되지 않았습니다.
        </p>
        <p class="muted">
          현재 심화 관문은 Unit 37처럼 mutation-rules.js에 규칙이 등록된 유닛부터 작동합니다.
        </p>
      </section>
    `;
  }

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>심화 관문</h2>
      <p class="muted">${escapeHTML(question.prompt)}</p>
      <div class="badge-row">
        <span class="badge">챕터 ${escapeHTML(chapterId)}</span>
        <span class="badge">자기평가 ${escapeHTML(confidence)}</span>
      </div>
    </section>

    <section class="card" id="gate-question" data-gate-id="GATE-${escapeHTML(chapterId)}">
      <h3>다음 중 어법상 틀린 것은?</h3>
      <div class="choice-list">
        ${question.options.map((option, index) => `
          <button
            class="choice-button secondary"
            data-action="check-gate"
            data-gate-id="GATE-${escapeHTML(chapterId)}"
            data-chapter-id="${escapeHTML(chapterId)}"
            data-confidence="${escapeHTML(confidence)}"
            data-choice-index="${index}"
            data-answer-index="${question.answerIndex}"
            data-tag-id="${escapeHTML(question.answer.tagId || "") }"
            data-explanation="${escapeHTML(question.answer.explanation || "") }"
          >
            ${index + 1}. ${escapeHTML(option.text)}
          </button>
        `).join("")}
      </div>
      <div class="feedback-box" id="gate-feedback"></div>
    </section>
  `;
}
