import { TAG_TAXONOMY } from "../data/tag-taxonomy.js";
import { escapeHTML } from "../utils/sanitize.js";

function renderNode(key, node, depth = 0) {
  const children = node.children || {};
  const childKeys = Object.keys(children);

  return `
    <article class="taxonomy-node depth-${depth}">
      <div class="taxonomy-title">
        <span class="badge">${escapeHTML(key)}</span>
        <strong>${escapeHTML(node.label || key)}</strong>
      </div>
      ${node.description ? `<p class="muted">${escapeHTML(node.description)}</p>` : ""}

      ${
        childKeys.length
          ? `<div class="taxonomy-children">
              ${childKeys.map(childKey => renderNode(childKey, children[childKey], depth + 1)).join("")}
            </div>`
          : ""
      }
    </article>
  `;
}

export function renderTaxonomyView() {
  const majorKeys = Object.keys(TAG_TAXONOMY);

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>문법 지도</h2>
      <p class="muted">
        1001una v2의 모든 문장 분석, 적용 훈련, 어법 변형 문제는 이 문법 지도에 연결됩니다.
      </p>
    </section>

    <section class="taxonomy-map">
      ${majorKeys.map(key => renderNode(key, TAG_TAXONOMY[key], 0)).join("")}
    </section>
  `;
}
