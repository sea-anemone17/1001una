export function calculateGateStars({ correctRate, selfCheck = {} }) {
  let stars = 1;

  if (correctRate >= 0.9) stars = 3;
  else if (correctRate >= 0.7) stars = 2;

  if (selfCheck.guessedMany) stars -= 1;
  if (selfCheck.manyWrong) stars -= 1;
  if (selfCheck.confusedSentences) stars -= 1;

  return Math.max(1, Math.min(3, stars));
}

export function getHonestyReward(selfCheck = {}) {
  const checked = Object.values(selfCheck).filter(Boolean).length;
  if (!checked) return 0;
  return checked * 10;
}

export function renderStars(count = 1) {
  return "★".repeat(count) + "☆".repeat(Math.max(0, 3 - count));
}
