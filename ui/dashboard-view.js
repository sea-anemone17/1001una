import { loadUserData } from "../storage/db.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { renderStars } from "../engine/reward-engine.js";
import { escapeHTML } from "../utils/sanitize.js";

function getTagLabel(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId)?.label || tagId;
}

function renderTagMastery(tagMastery = {}) {
  const entries = Object.entries(tagMastery);

  if (!entries.length) {
    return `<p class="muted">아직 태그 숙련도 기록이 없습니다.</p>`;
  }

  return `
    <div class="mastery-list">
      ${entries.map(([tagId, mastery]) => `
        <article class="mastery-card">
          <div class="taxonomy-title">
            <span class="badge">${escapeHTML(tagId)}</span>
            <strong>${escapeHTML(getTagLabel(tagId))}</strong>
          </div>

          <div class="badge-row">
            <span class="badge">Lv.${mastery.level ?? 1}</span>
            <span class="badge">시도 ${mastery.attempts ?? 0}</span>
            <span class="badge">정답 ${mastery.correct ?? 0}</span>
            <span class="badge">오답 ${mastery.wrong ?? 0}</span>
            <span class="badge">낮은 확신 ${mastery.lowConfidence ?? 0}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderGateResults(gateResults = {}) {
  const entries = Object.entries(gateResults);

  if (!entries.length) return `<p class="muted">아직 심화 관문 기록이 없습니다.</p>`;

  return `
    <div class="mastery-list">
      ${entries.map(([gateId, result]) => `
        <article class="mastery-card">
          <div class="taxonomy-title">
            <span class="badge">${escapeHTML(gateId)}</span>
            <strong>${renderStars(result.bestStars || 1)}</strong>
          </div>
          <div class="badge-row">
            <span class="badge">도전 ${result.attempts || 0}회</span>
            <span class="badge">최근 ${result.lastResult?.isCorrect ? "정답" : "오답"}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

export function renderDashboardView() {
  const data = loadUserData();

  const viewedCount = data.progress?.viewedSentences?.length || 0;
  const applicationCount = data.applicationLogs?.length || 0;
  const wrongCount = data.wrongLogs?.length || 0;
  const mistakeCount = data.mistakeLogs?.length || 0;
  const achievementCount = data.achievements?.length || 0;

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>학습 대시보드</h2>
      <p class="muted">지금까지의 학습 기록과 태그 숙련도를 확인합니다.</p>
    </section>

    <section class="grid grid-2">
      <article class="card stat-card"><h3>본 문장</h3><p class="stat-number">${viewedCount}</p></article>
      <article class="card stat-card"><h3>적용 풀이</h3><p class="stat-number">${applicationCount}</p></article>
      <article class="card stat-card"><h3>오답 기록</h3><p class="stat-number">${wrongCount}</p></article>
      <article class="card stat-card"><h3>실수 기록</h3><p class="stat-number">${mistakeCount}</p></article>
    </section>

    <section class="card">
      <h3>태그 숙련도</h3>
      ${renderTagMastery(data.tagMastery)}
    </section>

    <section class="card">
      <h3>심화 관문 기록</h3>
      ${renderGateResults(data.gateResults)}
      <div class="button-row">
        <button data-action="go-advanced-gate" data-chapter-id="CH01">심화 관문 도전</button>
      </div>
    </section>

    <section class="card">
      <h3>최근 오답</h3>
      ${
        data.wrongLogs?.length
          ? `<ul>${data.wrongLogs.slice(-5).reverse().map(log => `
              <li><strong>${escapeHTML(getTagLabel(log.tagId))}</strong><span class="muted"> / 이유: ${escapeHTML(log.reason)}</span></li>
            `).join("")}</ul>`
          : `<p class="muted">아직 오답 기록이 없습니다.</p>`
      }
    </section>

    <section class="card">
      <h3>업적</h3>
      <p class="stat-number">${achievementCount}</p>
      <p class="muted">첫 3성 클리어 등 자기 성장 기록이 여기에 쌓입니다.</p>
    </section>
  `;
}
