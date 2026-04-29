import { state } from "../js/state.js";
import { renderHomeView } from "./home-view.js";
import { renderChapterView } from "./chapter-view.js";
import { renderSentenceAnalysisView } from "./sentence-analysis-view.js";
import { setHTML, $ } from "../utils/dom.js";

export function render() {
  const app = $("#app");

  if (!app) return;

  if (state.currentView === "home") {
    setHTML(app, renderHomeView());
    return;
  }

  if (state.currentView === "chapter") {
    setHTML(app, renderChapterView(state.selectedChapterId));
    return;
  }

  if (state.currentView === "sentence-analysis") {
    setHTML(app, renderSentenceAnalysisView(state.selectedSentenceId));
    return;
  }

  setHTML(app, renderHomeView());
}
