import { state } from "../js/state.js";
import { renderHomeView } from "./home-view.js";
import { renderChapterView } from "./chapter-view.js";
import { renderSentenceAnalysisView } from "./sentence-analysis-view.js";
import { setHTML, $ } from "../utils/dom.js";
import { renderTaxonomyView } from "./taxonomy-view.js";
import { renderApplicationView } from "./application-view.js";
import { renderDashboardView } from "./dashboard-view.js";
import { renderAdvancedGateView } from "./advanced-gate-view.js";
import { renderReviewView } from "./review-view.js";
import { renderSettingsView } from "./settings-view.js";

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

  if (state.currentView === "taxonomy") {
    setHTML(app, renderTaxonomyView());
    return;
  }

  if (state.currentView === "dashboard") {
    setHTML(app, renderDashboardView());
    return;
  }

  if (state.currentView === "application") {
    setHTML(app, renderApplicationView(state.selectedSentenceId));
    return;
  }

  if (state.currentView === "advanced-gate") {
    setHTML(app, renderAdvancedGateView(state.selectedChapterId || "CH01", state.selectedGateConfidence));
    return;
  }

  if (state.currentView === "review") {
    setHTML(app, renderReviewView());
    return;
  }

  if (state.currentView === "settings") {
    setHTML(app, renderSettingsView());
    return;
  }

  setHTML(app, renderHomeView());
}
