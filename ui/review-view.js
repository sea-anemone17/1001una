import { loadUserData } from "../storage/db.js";
import { buildReviewRecommendations } from "../engine/review-engine.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderReviewView() {
  const data = loadUserData();
  const recommendations = buildReviewRecommendations(data);

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>복습 추천</h2>
      <p class="muted">오답, 본 문장, 태그 숙련도를 바탕으로 지금 보면 좋은 내용을 추천합니다.</p>
    </section>

    <section class="grid grid-2">
      ${recommendations.map(item => `
        <article class="card">
          <div class="badge-row">
            <span class="badge">${escapeHTML(item.type)}</span>
          </div>
          <h3>${escapeHTML(item.title)}</h3>
          <p class="muted">${escapeHTML(item.description)}</p>
          <div class="button-row">
            ${item.sentenceId ? `<button data-action="go-sentence" data-sentence-id="${item.sentenceId}">문장 보기</button>` : ""}
            ${item.chapterId ? `<button data-action="go-advanced-gate" data-chapter-id="${item.chapterId}">심화 관문</button>` : ""}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}
