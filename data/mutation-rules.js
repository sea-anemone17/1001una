export const MUTATION_RULES = [
  {
    id: "MUT-PASS-MODAL-DROP-BE",
    sentenceId: 1,
    tagId: "PASS-MODAL-BEPP",
    target: "should be acknowledged and respected",
    replacement: "should acknowledged and respected",
    label: "조동사 수동태 be 누락",
    explanation: "수동 의미이므로 should 뒤에는 be + p.p.가 필요합니다. 따라서 should acknowledged는 어법상 틀립니다.",
    difficulty: "중난도"
  },
  {
    id: "MUT-AGR-PARALLEL-PP-ING",
    sentenceId: 1,
    tagId: "AGR-PARALLEL-PP",
    target: "acknowledged and respected",
    replacement: "acknowledged and respecting",
    label: "p.p. 병렬 붕괴",
    explanation: "acknowledged와 respected가 p.p.로 병렬되어야 하는데, respecting으로 바꾸면 병렬 구조가 깨집니다.",
    difficulty: "고난도"
  },
  {
    id: "MUT-CLAUSE-MANDATIVE-TO",
    sentenceId: 2,
    tagId: "CLAUSE-MANDATIVE-SHOULD",
    target: "that you exercise frequently",
    replacement: "that you to exercise frequently",
    label: "that절 내부 to-v 오용",
    explanation: "necessary that S V 구조에서 that절 안에는 동사원형이 올 수 있습니다. you to exercise는 절의 동사 구조가 되지 못합니다.",
    difficulty: "중난도"
  },
  {
    id: "MUT-CLAUSE-MANDATIVE-NOT-TO",
    sentenceId: 3,
    tagId: "CLAUSE-MANDATIVE-SHOULD",
    target: "that the child not eat too much sugar",
    replacement: "that the child not to eat too much sugar",
    label: "not + 동사원형 구조 오류",
    explanation: "suggestion 뒤 that절에서 should가 생략되면 부정은 not + 동사원형입니다. not to eat으로 바꾸면 이 구조와 맞지 않습니다.",
    difficulty: "중난도"
  }
];
