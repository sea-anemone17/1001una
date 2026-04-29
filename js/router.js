import {
  state,
  setView,
  setSelectedChapter,
  setSelectedSentence,
  setSelectedGateConfidence,
  resetGateConfidence
} from "./state.js";
import { render } from "../ui/render.js";
import { markSentenceViewed } from "../storage/db.js";

export function goHome() {
  setView("home");
  render();
}

export function goDashboard() {
  setView("dashboard");
  render();
}

export function goSettings() {
  setView("settings");
  render();
}

export function goReview() {
  setView("review");
  render();
}

export function goChapter(chapterId) {
  setSelectedChapter(chapterId);
  setView("chapter");
  render();
}

export function goSentence(sentenceId) {
  setSelectedSentence(sentenceId);
  markSentenceViewed(sentenceId);
  setView("sentence-analysis");
  render();
}

export function goTaxonomy() {
  setView("taxonomy");
  render();
}

export function goApplication(sentenceId) {
  setSelectedSentence(sentenceId);
  setView("application");
  render();
}

export function goAdvancedGate(chapterId) {
  setSelectedChapter(chapterId);
  resetGateConfidence();
  setView("advanced-gate");
  render();
}

export function chooseGateConfidence(chapterId, confidence) {
  setSelectedChapter(chapterId);
  setSelectedGateConfidence(confidence);
  setView("advanced-gate");
  render();
}

export function getRouteState() {
  return state;
}
