import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { GRAMMAR_TAGS } from "../data/grammar-tags.js";

function getTagLabel(tagId) {
  return GRAMMAR_TAGS.find(tag => tag.id === tagId)?.label || tagId;
}

export function buildReviewRecommendations(userData) {
  const recommendations = [];
  const viewed = new Set((userData.progress?.viewedSentences || []).map(Number));
  const wrongTagCounts = {};

  for (const log of userData.wrongLogs || []) {
    if (!log.tagId) continue;
    wrongTagCounts[log.tagId] = (wrongTagCounts[log.tagId] || 0) + 1;
  }

  const weakTags = Object.entries(wrongTagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  for (const [tagId, count] of weakTags) {
    recommendations.push({
      type: "tag",
      title: `${getTagLabel(tagId)} 복습`,
      description: `오답 기록 ${count}회가 있어요. 해당 태그가 붙은 문장을 다시 확인해 보세요.`,
      tagId
    });
  }

  const unseen = GENERATED_SENTENCES.filter(sentence => !viewed.has(Number(sentence.id)));

  if (unseen.length) {
    recommendations.push({
      type: "sentence",
      title: "아직 보지 않은 문장",
      description: `${unseen.length}개 문장을 아직 분석하지 않았어요.`,
      sentenceId: unseen[0].id
    });
  }

  if (!recommendations.length) {
    recommendations.push({
      type: "gate",
      title: "심화 관문 도전",
      description: "기본 학습 기록이 안정적입니다. 챕터별 어법 변형 문제에 도전해 보세요.",
      chapterId: "CH37"
    });
  }

  return recommendations;
}
