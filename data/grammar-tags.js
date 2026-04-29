export const GRAMMAR_TAGS = [
  {
    id: "CLAUSE-MANDATIVE-SHOULD",
    label: "요구·주장·제안·명령 that절의 should",
    taxonomyPath: ["CLAUSE", "MANDATIVE", "SHOULD"],

    formula: "insist/suggest/demand/recommend + that + S + (should) + V",
    explanation:
      "요구·주장·제안·명령을 나타내는 동사나 명사 뒤 that절에서 should + 동사원형 구조가 쓰일 수 있습니다.",

    examples: [
      "Animal protection groups insist that the rights of animals should be acknowledged and respected."
    ],

    commonErrors: [
      "should 뒤에 to-v 사용",
      "should 뒤에 과거형 사용",
      "should를 일반 조동사처럼만 보고 의미를 놓침"
    ],

    mutationPatterns: [
      "SHOULD_TO_TO_INF",
      "SHOULD_TO_PAST",
      "DROP_SHOULD_WITH_WRONG_FORM"
    ],

    relatedTags: [
      "CLAUSE-MANDATIVE-BARE",
      "PASS-MODAL-BEPP"
    ],

    prerequisites: [
      "MODAL-BASIC-BASE",
      "CLAUSE-NOUN-THAT"
    ],

    risk: 4,
    status: "active"
  },

  {
    id: "PASS-MODAL-BEPP",
    label: "조동사 수동태",
    taxonomyPath: ["PASS", "MODAL", "BEPP"],

    formula: "modal + be + p.p.",
    explanation:
      "조동사 뒤에서 수동태를 만들 때는 조동사 + be + p.p. 형태를 사용합니다.",

    examples: [
      "The rights of animals should be acknowledged and respected."
    ],

    commonErrors: [
      "be 누락",
      "p.p. 대신 동사원형 사용",
      "being을 잘못 사용"
    ],

    mutationPatterns: [
      "DROP_BE",
      "PP_TO_BASE",
      "BE_TO_BEING"
    ],

    relatedTags: [
      "PASS-BASIC-BEPP",
      "MODAL-BASIC-BASE",
      "AGR-PARALLEL-PP"
    ],

    prerequisites: [
      "PASS-BASIC-BEPP",
      "MODAL-BASIC-BASE"
    ],

    risk: 4,
    status: "active"
  },

  {
    id: "AGR-PARALLEL-PP",
    label: "p.p. 병렬",
    taxonomyPath: ["AGR", "PARALLEL", "PP"],

    formula: "p.p. and p.p.",
    explanation:
      "and로 연결된 요소는 같은 문법적 형태로 병렬되어야 합니다. 수동태 안에서는 p.p.와 p.p.가 병렬될 수 있습니다.",

    examples: [
      "should be acknowledged and respected"
    ],

    commonErrors: [
      "p.p. and V-ing",
      "p.p. and 동사원형",
      "앞뒤 병렬 구조를 다르게 만듦"
    ],

    mutationPatterns: [
      "PP_AND_ING",
      "PP_AND_BASE",
      "PARALLEL_FORM_MISMATCH"
    ],

    relatedTags: [
      "PASS-MODAL-BEPP",
      "AGR-PARALLEL-WORD",
      "AGR-PARALLEL-PHRASE"
    ],

    prerequisites: [],

    risk: 3,
    status: "active"
  }
];
