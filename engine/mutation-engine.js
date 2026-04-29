import { SENTENCES_CHAPTER_01 } from "../data/sentences/chapter-01.js";
import { MUTATION_RULES } from "../data/mutation-rules.js";
import { VALID_VARIANTS } from "../data/valid-variants.js";

function applyReplacement(text, target, replacement) {
  if (!text.includes(target)) return text;
  return text.replace(target, replacement);
}

function getSentence(sentenceId) {
  return SENTENCES_CHAPTER_01.find(sentence => sentence.id === Number(sentenceId));
}

function makeOriginalOption(sentence) {
  return {
    sentenceId: sentence.id,
    text: sentence.text,
    isWrong: false,
    changed: false,
    explanation: "원문 그대로이며 어법상 문제 없습니다."
  };
}

function makeValidOption(sentence) {
  const variant = VALID_VARIANTS.find(item => item.sentenceId === sentence.id);
  if (!variant) return makeOriginalOption(sentence);

  return {
    sentenceId: sentence.id,
    text: applyReplacement(sentence.text, variant.target, variant.replacement),
    isWrong: false,
    changed: true,
    variantId: variant.id,
    explanation: variant.explanation
  };
}

function makeInvalidOption(rule) {
  const sentence = getSentence(rule.sentenceId);

  return {
    sentenceId: sentence.id,
    text: applyReplacement(sentence.text, rule.target, rule.replacement),
    isWrong: true,
    changed: true,
    mutationId: rule.id,
    tagId: rule.tagId,
    explanation: rule.explanation,
    label: rule.label,
    difficulty: rule.difficulty
  };
}

export function buildChapterGateQuestion(chapterId = "CH01", seed = 0) {
  const sentences = chapterId === "CH01" ? SENTENCES_CHAPTER_01 : [];
  const rules = MUTATION_RULES.filter(rule => getSentence(rule.sentenceId));
  const selectedRule = rules[Math.abs(seed) % rules.length];

  const options = sentences.map(sentence => {
    if (sentence.id === selectedRule.sentenceId) {
      return makeInvalidOption(selectedRule);
    }

    return sentence.id % 2 === 0 ? makeValidOption(sentence) : makeOriginalOption(sentence);
  });

  const answerIndex = options.findIndex(option => option.isWrong);

  return {
    id: `GATE-${chapterId}-${selectedRule.id}`,
    chapterId,
    prompt: "다음 중 어법상 틀린 것은?",
    options,
    answerIndex,
    answer: options[answerIndex]
  };
}
