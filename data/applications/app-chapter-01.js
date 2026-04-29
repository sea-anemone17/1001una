export const APPLICATIONS_CHAPTER_01 = [
  {
    id: "APP-001-01",
    sentenceId: 1,
    type: "choice",
    tagId: "PASS-MODAL-BEPP",
    prompt: "다음 중 should be acknowledged의 구조로 알맞은 것은?",
    choices: [
      "should + p.p.",
      "should + be + p.p.",
      "should + to-v",
      "should + being + p.p."
    ],
    answerIndex: 1,
    explanation: "수동 의미이므로 조동사 should 뒤에 be + p.p.가 와야 합니다."
  },
  {
    id: "APP-001-02",
    sentenceId: 1,
    type: "choice",
    tagId: "AGR-PARALLEL-PP",
    prompt: "acknowledged and respected가 맞는 이유는?",
    choices: [
      "and 앞뒤가 모두 p.p.로 병렬되어 있기 때문",
      "and 뒤에는 항상 동사원형이 오기 때문",
      "respected가 명사이기 때문",
      "acknowledged가 현재분사이기 때문"
    ],
    answerIndex: 0,
    explanation: "and 앞뒤가 acknowledged / respected로 같은 p.p. 형태를 이루므로 병렬 구조가 맞습니다."
  },
  {
    id: "APP-002-01",
    sentenceId: 2,
    type: "choice",
    tagId: "CLAUSE-MANDATIVE-SHOULD",
    prompt: "It is necessary that you exercise에서 exercise가 쓰인 이유는?",
    choices: [
      "과거형이기 때문에",
      "필요성 표현 뒤 that절에서 동사원형이 쓰일 수 있기 때문에",
      "exercise가 명사이기 때문에",
      "to exercise가 생략되었기 때문에"
    ],
    answerIndex: 1,
    explanation: "It is necessary that S V 구조에서 that절 안에는 동사원형이 올 수 있습니다."
  },
  {
    id: "APP-003-01",
    sentenceId: 3,
    type: "choice",
    tagId: "CLAUSE-MANDATIVE-SHOULD",
    prompt: "that the child not eat에서 not eat이 맞는 이유는?",
    choices: [
      "not 뒤에는 항상 과거형이 오기 때문에",
      "제안 계열 명사 suggestion 뒤 that절에서 should가 생략되고 동사원형이 올 수 있기 때문에",
      "eat이 명사로 쓰였기 때문에",
      "the child가 복수이기 때문에"
    ],
    answerIndex: 1,
    explanation: "suggestion 뒤 that절에서 should가 생략될 수 있고, 부정은 not + 동사원형 형태로 나타납니다."
  }
];
