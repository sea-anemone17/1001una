export function gradeChoiceQuestion(question, selectedIndex) {
  const isCorrect = Number(selectedIndex) === question.answerIndex;

  return {
    isCorrect,
    selectedIndex: Number(selectedIndex),
    answerIndex: question.answerIndex,
    explanation: question.explanation,
    tagId: question.tagId
  };
}
