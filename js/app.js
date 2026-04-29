import { render } from "../ui/render.js";
import {
  goHome,
  goChapter,
  goSentence,
  goTaxonomy,
  goApplication,
  goDashboard,
  goSettings,
  goReview,
  goAdvancedGate,
  chooseGateConfidence
} from "./router.js";
import {
  backupUserData,
  loadUserData,
  logWrongAnswer,
  logMistake,
  updateTagMastery,
  logApplicationResult,
  logConfidence,
  markApplicationCompleted,
  recordGateResult,
  resetUserData
} from "../storage/db.js";
import { exportUserData, importUserDataFromFile } from "../storage/import-export.js";
import { gradeChoiceQuestion } from "../engine/grading-engine.js";
import { getApplicationById } from "../ui/application-view.js";
import { renderDiagnosisOptions } from "../ui/feedback-diagnosis.js";
import { calculateGateStars, getHonestyReward, renderStars } from "../engine/reward-engine.js";

function handleClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;

  if (action === "go-home") {
    goHome();
    return;
  }

  if (action === "go-dashboard") {
    goDashboard();
    return;
  }

  if (action === "go-settings") {
    goSettings();
    return;
  }

  if (action === "go-review") {
    goReview();
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

  if (action === "go-advanced-gate") {
    goAdvancedGate(actionTarget.dataset.chapterId || "CH01");
    return;
  }

  if (action === "choose-gate-confidence") {
    chooseGateConfidence(actionTarget.dataset.chapterId || "CH01", actionTarget.dataset.confidence);
    return;
  }

  if (action === "check-application") {
    const questionId = actionTarget.dataset.questionId;
    const choiceIndex = Number(actionTarget.dataset.choiceIndex);
    const question = getApplicationById(questionId);
    const result = gradeChoiceQuestion(question, choiceIndex);
    const feedbackBox = document.querySelector(`#feedback-${questionId}`);

    logApplicationResult({
      questionId,
      tagId: question.tagId,
      selectedIndex: choiceIndex,
      answerIndex: question.answerIndex,
      isCorrect: result.isCorrect
    });
    markApplicationCompleted(questionId);

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
      logConfidence({ questionId, tagId: question.tagId, confidence: diagnosisId });
      updateTagMastery(question.tagId, diagnosisId === "GUESSED" ? "lowConfidence" : "correct");
    } else {
      if (diagnosisId === "MISTAKE") {
        logMistake({ questionId, tagId: question.tagId, reason: diagnosisId });
      } else {
        logWrongAnswer({ questionId, tagId: question.tagId, reason: diagnosisId });
      }
      updateTagMastery(question.tagId, "wrong");
    }

    const box = actionTarget.closest(".diagnosis-box");
    if (box) {
      box.innerHTML = `<p><strong>기록되었습니다.</strong> 대시보드와 복습 추천에 반영됩니다.</p>`;
    }
    return;
  }

  if (action === "check-gate") {
    const choiceIndex = Number(actionTarget.dataset.choiceIndex);
    const answerIndex = Number(actionTarget.dataset.answerIndex);
    const isCorrect = choiceIndex === answerIndex;
    const feedbackBox = document.querySelector("#gate-feedback");

    if (feedbackBox) {
      feedbackBox.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
      feedbackBox.innerHTML = `
        <strong>${isCorrect ? "정답입니다." : "오답입니다."}</strong>
        <p>${actionTarget.dataset.explanation}</p>
        <div class="diagnosis-box">
          <p><strong>클리어 자기평가</strong></p>
          <label><input type="checkbox" data-gate-self="guessedSome"> 찍어서 맞힌 문제가 조금 있다</label><br>
          <label><input type="checkbox" data-gate-self="guessedMany"> 찍어서 맞힌 문제가 많다</label><br>
          <label><input type="checkbox" data-gate-self="confusedSentences"> 헷갈린 문장이 있었다</label><br>
          <label><input type="checkbox" data-gate-self="manyWrong"> 틀린 게 많았다</label>
          <div class="button-row">
            <button
              data-action="submit-gate-self-check"
              data-gate-id="${actionTarget.dataset.gateId}"
              data-tag-id="${actionTarget.dataset.tagId}"
              data-is-correct="${isCorrect}"
              data-confidence="${actionTarget.dataset.confidence}"
            >
              별 기록 저장
            </button>
          </div>
        </div>
      `;
    }
    return;
  }

  if (action === "submit-gate-self-check") {
    const gateId = actionTarget.dataset.gateId;
    const tagId = actionTarget.dataset.tagId;
    const isCorrect = actionTarget.dataset.isCorrect === "true";
    const selfCheck = {};

    document.querySelectorAll("[data-gate-self]").forEach(input => {
      selfCheck[input.dataset.gateSelf] = input.checked;
    });

    const stars = calculateGateStars({
      correctRate: isCorrect ? 1 : 0,
      selfCheck
    });
    const honestyReward = getHonestyReward(selfCheck);

    recordGateResult(gateId, {
      isCorrect,
      stars,
      selfCheck,
      confidence: actionTarget.dataset.confidence,
      honestyReward
    });

    if (tagId) updateTagMastery(tagId, isCorrect ? "correct" : "wrong");

    const box = actionTarget.closest(".diagnosis-box");
    if (box) {
      box.innerHTML = `
        <p><strong>관문 기록 저장 완료!</strong></p>
        <p class="stat-number">${renderStars(stars)}</p>
        <p class="muted">솔직한 메타인지 보너스 +${honestyReward}</p>
      `;
    }
    return;
  }

  if (action === "export-data") {
    exportUserData();
    return;
  }

  if (action === "reset-data") {
    const ok = confirm("정말 학습 기록을 초기화할까요? 백업하지 않은 기록은 복구하기 어렵습니다.");
    if (ok) {
      resetUserData();
      backupUserData();
      goHome();
    }
    return;
  }
}

function handleChange(event) {
  const target = event.target;
  if (target?.dataset?.action !== "import-data-file") return;

  const file = target.files?.[0];
  if (!file) return;

  importUserDataFromFile(file)
    .then(() => {
      alert("백업 파일을 가져왔습니다.");
      goDashboard();
    })
    .catch(error => {
      alert(`가져오기 실패: ${error.message}`);
    });
}

document.addEventListener("click", handleClick);
document.addEventListener("change", handleChange);

loadUserData();
backupUserData();
render();
