import { state } from "../js/state.js";
import { setHTML } from "../utils/dom.js";

function renderError(app, error) {
  console.error(error);
  setHTML(app, `
    <section class="card">
      <h2>화면을 불러오지 못했습니다.</h2>
      <p class="muted">파일 연결 오류가 있을 수 있습니다.</p>
      <pre class="code">${String(error?.message || error)}</pre>
      <button data-action="go-home">홈으로</button>
    </section>
  `);
}

export async function render() {
  const app = document.getElementById("app");
  if (!app) return;

  try {
    if (state.currentView === "home") {
      const { renderHomeView } = await import("./home-view.js");
      setHTML(app, renderHomeView());
      return;
    }

    if (state.currentView === "chapter") {
      const { renderChapterView } = await import("./chapter-view.js");
      setHTML(app, renderChapterView(state.selectedChapterId));
      return;
    }

    if (state.currentView === "sentence-analysis") {
      const { renderSentenceAnalysisView } = await import("./sentence-analysis-view.js");
      setHTML(app, renderSentenceAnalysisView(state.selectedSentenceId));
      return;
    }

    if (state.currentView === "taxonomy") {
      const { renderTaxonomyView } = await import("./taxonomy-view.js");
      setHTML(app, renderTaxonomyView());
      return;
    }

    if (state.currentView === "dashboard") {
      const { renderDashboardView } = await import("./dashboard-view.js");
      setHTML(app, renderDashboardView());
      return;
    }

    if (state.currentView === "application") {
      const { renderApplicationView } = await import("./application-view.js");
      setHTML(app, renderApplicationView(state.selectedSentenceId));
      return;
    }

    if (state.currentView === "advanced-gate") {
      const { renderAdvancedGateView } = await import("./advanced-gate-view.js");
      setHTML(app, renderAdvancedGateView(state.selectedChapterId || "CH37", state.selectedGateConfidence));
      return;
    }

    if (state.currentView === "review") {
      const { renderReviewView } = await import("./review-view.js");
      setHTML(app, renderReviewView());
      return;
    }

    if (state.currentView === "settings") {
      const { renderSettingsView } = await import("./settings-view.js");
      setHTML(app, renderSettingsView());
      return;
    }

    const { renderHomeView } = await import("./home-view.js");
    setHTML(app, renderHomeView());
  } catch (error) {
    renderError(app, error);
  }
}
