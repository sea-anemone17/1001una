export const state = {
  currentView: "home",
  selectedChapterId: null,
  selectedSentenceId: null
};

export function setView(viewName) {
  state.currentView = viewName;
}

export function setSelectedChapter(chapterId) {
  state.selectedChapterId = chapterId;
}

export function setSelectedSentence(sentenceId) {
  state.selectedSentenceId = Number(sentenceId);
}
