import { loadUserData } from "../storage/db.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderSettingsView() {
  const data = loadUserData();

  return `
    <section class="card">
      <button class="secondary" data-action="go-home">← 홈</button>
      <h2>설정 / 데이터 관리</h2>
      <p class="muted">사용자 기록은 앱 콘텐츠와 분리되어 브라우저에 저장됩니다. 업데이트 전에는 백업을 권장합니다.</p>
    </section>

    <section class="card">
      <h3>학습 데이터</h3>
      <div class="badge-row">
        <span class="badge">스키마 v${escapeHTML(data.schemaVersion)}</span>
        <span class="badge">앱 기록 ${escapeHTML(data.appVersionAtLastUse)}</span>
        <span class="badge">본 문장 ${data.progress?.viewedSentences?.length || 0}</span>
      </div>
      <div class="button-row">
        <button data-action="export-data">백업 내보내기</button>
        <label class="button secondary" for="importDataFile">백업 가져오기</label>
        <input id="importDataFile" type="file" accept="application/json" data-action="import-data-file" hidden />
        <button class="secondary danger-button" data-action="reset-data">학습 기록 초기화</button>
      </div>
      <p class="muted">가져오기는 JSON 백업 파일만 지원합니다.</p>
    </section>
  `;
}
