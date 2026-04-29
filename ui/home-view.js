import { GENERATED_CHAPTERS } from "../data/generated/chapters.generated.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderHomeView() {
  const chapterCards = GENERATED_CHAPTERS.map(chapter => `
    <article class="card">
      <h2>${escapeHTML(chapter.number)}. ${escapeHTML(chapter.title)}</h2>

      <div class="badge-row">
        <span class="badge">${chapter.sentenceIds.length}문장</span>
        <span class="badge">${escapeHTML(chapter.id)}</span>
      </div>

      <div class="button-row">
        <button type="button" data-action="go-chapter" data-chapter-id="${chapter.id}">
          챕터 들어가기 →
        </button>
      </div>
    </article>
  `).join("");

  return `
    <section class="card">
      <h2>1001una v2</h2>
      <p>
        문장을 외우는 대신, 문법 구조를 이해하고 어법 변형을 간파하는 연습을 합니다.
      </p>
      <p class="muted">
        현재 전체 500문장 DB가 연결되었습니다. 분석/태그는 점진적으로 채워집니다.
      </p>

      <div class="button-row">
        <button type="button" data-action="go-taxonomy">
          문법 지도 보기 →
        </button>
        <button type="button" data-action="go-dashboard">
          대시보드 보기 →
        </button>
        <button type="button" data-action="go-review">
          복습 추천 →
        </button>
        <button type="button" data-action="go-settings">
          설정/데이터 관리 →
        </button>
      </div>
    </section>

    <section class="grid grid-2">
      ${chapterCards}
    </section>
  `;
}
