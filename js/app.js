import { render } from "../ui/render.js";
import { goHome, goChapter, goSentence } from "./router.js";
import { backupUserData, loadUserData } from "../storage/db.js";

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

  if (action === "go-sentence") {
    goSentence(actionTarget.dataset.sentenceId);
    return;
  }
}

document.addEventListener("click", handleClick);

loadUserData();
backupUserData();

render();
