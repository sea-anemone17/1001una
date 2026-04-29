import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { MUTATION_RULES } from "../data/mutation-rules.js";
import { VALID_VARIANTS } from "../data/valid-variants.js";

function applyReplacement(text, target, replacement) {
  if (!text.includes(target)) return text;
  return text.replace(target, replacement);
}

function getSentence(sentenceId) {
  return GENERATED_SENTENCES.find(sentence => sentence.id === Number(sentenceId));
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

import { GENERATED_SENTENCES } from "../data/generated/sentences.generated.js";
import { MUTATION_RULES } from "../data/mutation-rules.js";
import { VALID_VARIANTS } from "../data/valid-variants.js";

function applyReplacement(text, target, replacement) {
  if (!text.includes(target)) return text;
  return text.replace(target, replacement);
}

function getSentence(sentenceId) {
  return GENERATED_SENTENCES.find(sentence => sentence.id === Number(sentenceId));
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

  if (!sentence) {
    return null;
  }

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

export function buildChapterGateQuestion(chapterId = "CH37", seed = 0) {
  const rules = MUTATION_RULES.filter(rule => {
    const sentence = getSentence(rule.sentenceId);
    return sentence && sentence.chapterId === chapterId;
  });

  if (!rules.length) {
    return null;
  }

  const selectedRule = rules[Math.abs(seed) % rules.length];

  const sentences = GENERATED_SENTENCES
    .filter(sentence => sentence.chapterId === chapterId)
    .filter(sentence => {
      return (
        sentence.id === selectedRule.sentenceId ||
        MUTATION_RULES.some(rule => rule.sentenceId === sentence.id)
      );
    });

  const options = sentences.slice(0, 5).map(sentence => {
    if (sentence.id === selectedRule.sentenceId) {
      return makeInvalidOption(selectedRule);
    }

    return sentence.id % 2 === 0
      ? makeValidOption(sentence)
      : makeOriginalOption(sentence);
  });

  const answerIndex = options.findIndex(option => option.isWrong);

  if (answerIndex === -1) {
    return null;
  }

  return {
    id: `GATE-${chapterId}-${selectedRule.id}`,
    chapterId,
    prompt: "다음 중 어법상 틀린 것은?",
    options,
    answerIndex,
    answer: options[answerIndex]
  };
}
