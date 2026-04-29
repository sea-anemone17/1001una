import { TAG_TAXONOMY } from "../data/tag-taxonomy.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";
import { escapeHTML } from "../utils/sanitize.js";

function getTagsByPath(path) {
  return GRAMMAR_TAGS.filter(tag => {
    if (!Array.isArray(tag.taxonomyPath)) return false;

    return (
      tag.taxonomyPath.length === path.length &&
      tag.taxonomyPath.every((part, index) => part === path[index])
    );
  });
}

function renderTagList(path) {
  const tags = getTagsByPath(path);

  if (!tags.length) return "";

  return `
    <div class="taxonomy-tags">
      ${tags.map(tag => `
        <article class="taxonomy-tag-card">
          <div class="taxonomy-title">
            <span class="badge">${escapeHTML(tag.id)}</span>
            <strong>${escapeHTML(tag.label)}</strong>
          </div>

          ${tag.formula ? `<p class="code">${escapeHTML(tag.formula)}</p>` : ""}
          ${tag.explanation ? `<p class="muted">${escapeHTML(tag.explanation)}</p>` : ""}

          <div class="badge-row">
            <span class="badge">위험도 ${escapeHTML(tag.risk ?? "-")}</span>
            <span class="badge">${escapeHTML(tag.status || "draft")}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderNode(key, node, depth = 0, path = []) {
  const currentPath = [...path, key];
  const children = node.children || {};
  const childKeys = Object.keys(children);

  return `
    <article class="taxonomy-node depth-${depth}">
      <div class="taxonomy-title">
        <span class="badge">${escapeHTML(key)}</span>
        <strong>${escapeHTML(node.label || key)}</strong>
      </div>

      ${node.description ? `<p class="muted">${escapeHTML(node.description)}</p>` : ""}

      ${renderTagList(currentPath)}

      ${
        childKeys.length
          ? `<div class="taxonomy-children">
              ${childKeys
                .map(childKey => renderNode(childKey, children[childKey], depth + 1, currentPath))
                .join("")}
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
      <div class="badge-row">
        <span class="badge">대분류 ${majorKeys.length}개</span>
        <span class="badge">등록 태그 ${GRAMMAR_TAGS.length}개</span>
      </div>
    </section>

    <section class="taxonomy-map">
      ${majorKeys.map(key => renderNode(key, TAG_TAXONOMY[key], 0, [])).join("")}
    </section>
  `;
}
