export const ANALYSES_CHAPTER_01 = {
  1: {
    basic: {
      summary: "insist 뒤에 that절이 목적어로 온 문장입니다.",
      keyPoints: [
        "insist that S should V",
        "should be p.p.",
        "acknowledged and respected 병렬"
      ],
      memoryHook: "insist that S should be p.p. / p.p. and p.p."
    },
    deep: {
      chunks: [
        { role: "S", text: "Animal protection groups" },
        { role: "V", text: "insist" },
        {
          role: "O",
          text: "that the rights of animals should be acknowledged and respected",
          note: "that절 전체가 insist의 목적어 역할을 합니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-SHOULD",
          evidence: "insist that ... should be",
          explanation: "insist가 주장/요구 의미일 때 that절 안에 should + 동사원형 구조가 쓰일 수 있습니다."
        },
        {
          tagId: "PASS-MODAL-BEPP",
          evidence: "should be acknowledged",
          explanation: "수동 의미이므로 should 뒤에 be + p.p.가 필요합니다."
        },
        {
          tagId: "AGR-PARALLEL-PP",
          evidence: "acknowledged and respected",
          explanation: "and 앞뒤가 모두 p.p. 형태로 병렬되어 있습니다."
        }
      ]
    }
  },

  2: {
    basic: {
      summary: "It is necessary that S V 구조입니다.",
      keyPoints: [
        "It is necessary that S V",
        "exercise가 동사원형으로 쓰임"
      ],
      memoryHook: "necessary that S 동사원형"
    },
    deep: {
      chunks: [
        { role: "가주어", text: "It" },
        { role: "V/C", text: "is necessary" },
        {
          role: "진주어",
          text: "that you exercise frequently in order to be in good shape",
          note: "that절이 실제 의미상 주어입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-SHOULD",
          evidence: "that you exercise",
          explanation: "필요성 표현 뒤 that절에서 동사원형이 쓰입니다."
        }
      ]
    }
  },

  3: {
    basic: {
      summary: "suggestion 뒤 that절에서 동사원형 not eat이 쓰인 문장입니다.",
      keyPoints: [
        "suggestion that S V",
        "부정형: not + 동사원형"
      ],
      memoryHook: "suggestion that S not V"
    },
    deep: {
      chunks: [
        { role: "S", text: "The doctor" },
        { role: "V", text: "gave" },
        { role: "O", text: "the suggestion" },
        {
          role: "동격절",
          text: "that the child not eat too much sugar",
          note: "suggestion의 내용을 설명하는 that절입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-SHOULD",
          evidence: "that the child not eat",
          explanation: "제안/요구 계열 명사 뒤 that절에서 should가 생략되고 동사원형이 올 수 있습니다."
        }
      ]
    }
  }
};
