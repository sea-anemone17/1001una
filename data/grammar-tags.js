export const GRAMMAR_TAGS = [
  {
    id: "CLAUSE-MANDATIVE-SHOULD",
    label: "요구·주장·제안 that절의 should",
    category: {
      major: "절과 접속사",
      middle: "명사절",
      minor: "mandative should"
    },
    formula: "insist/suggest/demand/recommend + that + S + (should) + V",
    explanation: "요구·주장·제안·명령을 나타내는 동사 뒤 that절에서 should + 동사원형이 쓰일 수 있습니다.",
    commonErrors: ["should 뒤에 to-v 사용", "should 뒤에 과거형 사용"],
    risk: 4,
    relatedTags: ["PASS-MODAL-BEPP"]
  },
  {
    id: "PASS-MODAL-BEPP",
    label: "조동사 수동태",
    category: {
      major: "수동태",
      middle: "조동사 수동태",
      minor: "modal + be + p.p."
    },
    formula: "modal + be + p.p.",
    explanation: "조동사 뒤에서 수동태를 만들 때는 be + p.p. 형태가 필요합니다.",
    commonErrors: ["be 누락", "p.p. 대신 동사원형 사용"],
    risk: 4,
    relatedTags: ["CLAUSE-MANDATIVE-SHOULD", "AGR-PARALLEL-PP"]
  },
  {
    id: "AGR-PARALLEL-PP",
    label: "p.p. 병렬",
    category: {
      major: "일치와 병렬",
      middle: "병렬 구조",
      minor: "p.p. and p.p."
    },
    formula: "p.p. and p.p.",
    explanation: "and로 연결된 표현은 같은 문법적 형태로 병렬되어야 합니다.",
    commonErrors: ["p.p. and V-ing", "p.p. and 동사원형"],
    risk: 3,
    relatedTags: ["PASS-MODAL-BEPP"]
  }
];
