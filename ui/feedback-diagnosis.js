import { DIAGNOSIS_OPTIONS } from "../engine/diagnosis-engine.js";

export function renderDiagnosisOptions(questionId, isCorrect) {
  const options = isCorrect
    ? DIAGNOSIS_OPTIONS.correct
    : DIAGNOSIS_OPTIONS.wrong;

  return `
    <div class="diagnosis-box">
      <p><strong>${isCorrect ? "얼마나 확신했나요?" : "왜 틀렸나요?"}</strong></p>

      <div class="diagnosis-options">
        ${options.map(option => `
          <button
            class="secondary"
            data-action="submit-diagnosis"
            data-question-id="${questionId}"
            data-diagnosis-id="${option.id}"
            data-is-correct="${isCorrect}"
          >
            ${option.label}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}
