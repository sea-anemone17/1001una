import { render } from "../ui/render.js";
import { goHome, goChapter, goSentence, goTaxonomy, goApplication } from "./router.js";
import { backupUserData, loadUserData } from "../storage/db.js";
import { gradeChoiceQuestion } from "../engine/grading-engine.js";
import { getApplicationById } from "../ui/application-view.js";
import { renderDiagnosisOptions } from "../ui/feedback-diagnosis.js";
import {
  logWrongAnswer,
  logMistake,
  updateTagMastery,
  updateUserData
} from "../storage/db.js";

function handleClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;

  if (action === "go-home") {
    goHome();
    return;
  }

  if (action === "go-chapter") {
    goChapter(actionTarget.dataset.chapterId);
    return;
  }

  if (action === "go-taxonomy") {
    goTaxonomy();
    return;
  }

  if (action === "go-application") {
    goApplication(actionTarget.dataset.sentenceId);
    return;
  }

  if (action === "go-sentence") {
    goSentence(actionTarget.dataset.sentenceId);
    return;
  }

  if (action === "check-application") {
    const questionId = actionTarget.dataset.questionId;
    const choiceIndex = Number(actionTarget.dataset.choiceIndex);

    const question = getApplicationById(questionId);
    const result = gradeChoiceQuestion(question, choiceIndex);

    const feedbackBox = document.querySelector(`#feedback-${questionId}`);

    if (feedbackBox) {
      feedbackBox.className = `feedback-box ${result.isCorrect ? "correct" : "wrong"}`;

      feedbackBox.innerHTML = `
        <strong>${result.isCorrect ? "정답입니다." : "오답입니다."}</strong>
        <p>${result.explanation}</p>
        ${renderDiagnosisOptions(questionId, result.isCorrect)}
      `;
    }
    
    return;
  }

  if (action === "submit-diagnosis") {
    const questionId = actionTarget.dataset.questionId;
    const diagnosisId = actionTarget.dataset.diagnosisId;
    const isCorrect = actionTarget.dataset.isCorrect === "true";

    const question = getApplicationById(questionId);

    if (isCorrect) {
      updateTagMastery(
        question.tagId,
        diagnosisId === "GUESSED" ? "lowConfidence" : "correct"
      );
    } else {
      if (diagnosisId === "MISTAKE") {
        logMistake({
          questionId,
          tagId: question.tagId,
          reason: diagnosisId
        });
      } else {
        logWrongAnswer({
          questionId,
          tagId: question.tagId,
          reason: diagnosisId
        });
      }

      updateTagMastery(question.tagId, "wrong");
    }

    actionTarget.closest(".diagnosis-box").innerHTML = `
      <p><strong>기록되었습니다.</strong></p>
    `;

    return;
  }
  
}

document.addEventListener("click", handleClick);

loadUserData();
backupUserData();

render();
