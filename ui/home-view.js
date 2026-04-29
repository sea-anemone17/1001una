import { CHAPTERS } from "../data/chapters.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderHomeView() {
  const chapterCards = CHAPTERS.map(chapter => `
    <article class="card">
      <h2>${escapeHTML(chapter.title)}</h2>
      <p class="muted">${escapeHTML(chapter.description)}</p>

      <div class="badge-row">
        <span class="badge">${chapter.sentenceIds.length}문장</span>
        <span class="badge">${escapeHTML(chapter.status)}</span>
      </div>

      <div class="button-row">
        <button type="button" data-action="go-chapter" data-chapter-id="${chapter.id}">
          챕터 들어가기 →
        </button>
        <button type="button" data-action="go-taxonomy">
          문법 지도 보기 →
        </button>
        <button type="button" data-action="go-dashboard">
          대시보드 보기 →
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
        v0에서는 홈, 챕터 선택, 문장 분석 화면만 구현합니다.
      </p>

      <div class="button-row">
        <button type="button" data-action="go-chapter" data-chapter-id="CH01">
          샘플 챕터 바로가기 →
        </button>
      </div>
    </section>

    <section class="grid grid-2">
      ${chapterCards || `
        <article class="card">
          <h2>챕터 데이터가 없습니다.</h2>
          <p class="muted">data/chapters.js를 확인해 주세요.</p>
        </article>
      `}
    </section>
  `;
}
