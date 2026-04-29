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
        <button type="button" data-action="go-chapter" data-chapter-id="${chapter.id}">챕터 들어가기 →</button>
        <button type="button" data-action="go-advanced-gate" data-chapter-id="${chapter.id}">심화 관문 →</button>
      </div>
    </article>
  `).join("");

  return `
    <section class="card hero-card">
      <h2>1001una v2</h2>
      <p>
        문장을 외우는 대신, 문법 구조를 이해하고 어법 변형을 간파하는 연습을 합니다.
      </p>
      <p class="muted">
        현재 1차본은 문법 지도, 문장 분석, 적용 훈련, 메타인지 기록, 대시보드, 복습 추천, 심화 관문, 데이터 백업을 포함합니다.
      </p>

      <div class="button-row">
        <button type="button" data-action="go-chapter" data-chapter-id="CH01">샘플 챕터 바로가기 →</button>
        <button type="button" data-action="go-taxonomy">문법 지도 보기 →</button>
        <button type="button" data-action="go-dashboard">대시보드 보기 →</button>
        <button type="button" data-action="go-review">복습 추천 →</button>
        <button type="button" data-action="go-settings">설정/데이터 관리 →</button>
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
