import { state, setView, setSelectedChapter, setSelectedSentence } from "./state.js";
import { render } from "../ui/render.js";

export function goHome() {
  setView("home");
  render();
}

export function goChapter(chapterId) {
  setSelectedChapter(chapterId);
  setView("chapter");
  render();
}

export function goSentence(sentenceId) {
  setSelectedSentence(sentenceId);
  setView("sentence-analysis");
  render();
}

export function getRouteState() {
  return state;
}
