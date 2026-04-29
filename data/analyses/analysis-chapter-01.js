export const ANALYSES_CHAPTER_01 = {
  260: {
    basic: {
      summary: "insist 뒤에 that절이 목적어로 오고, that절 안에서 should + be + p.p. 수동태가 쓰인 문장입니다.",
      keyPoints: [
        "insist that S should V",
        "should be p.p.",
        "acknowledged and respected p.p. 병렬"
      ],
      memoryHook: "insist that S should be p.p. / p.p. and p.p."
    },
    deep: {
      chunks: [
        { role: "S", text: "Animal protection groups" },
        { role: "V", text: "insist" },
        {
          role: "O", text: "that the rights of animals should be acknowledged and respected",
          note: "that절 전체가 insist의 목적어 역할을 합니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-SHOULD",
          evidence: "insist that ... should be",
          explanation: "주장·요구 계열 동사 insist 뒤 that절에서 should + 동사원형 구조가 쓰일 수 있습니다."
        },
        {
          tagId: "PASS-MODAL-BEPP",
          evidence: "should be acknowledged",
          explanation: "수동 의미이므로 조동사 should 뒤에 be + p.p.가 필요합니다."
        },
        {
          tagId: "AGR-PARALLEL-PP",
          evidence: "acknowledged and respected",
          explanation: "and 앞뒤가 모두 p.p. 형태로 병렬되어 있습니다."
        }
      ]
    }
  },

  261: {
    basic: {
      summary: "It is necessary that S V 구조로, 필요성 표현 뒤 that절에서 동사원형 exercise가 쓰인 문장입니다.",
      keyPoints: [
        "It is necessary that S V",
        "that절 안의 동사원형 exercise",
        "in order to-v 목적 표현"
      ],
      memoryHook: "necessary that S 동사원형"
    },
    deep: {
      chunks: [
        { role: "가주어", text: "It" },
        { role: "V/C", text: "is necessary" },
        {
          role: "진주어", text: "that you exercise frequently in order to be in good shape",
          note: "that절이 실제 의미상 주어입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-ADJTHAT",
          evidence: "It is necessary that you exercise",
          explanation: "necessary 같은 필요성 형용사 뒤 that절에서 동사원형이 쓰일 수 있습니다."
        },
        {
          tagId: "CLAUSE-MANDATIVE-BARE",
          evidence: "you exercise",
          explanation: "should가 생략된 형태로, that절 내부 동사가 원형으로 나타납니다."
        }
      ]
    }
  },

  262: {
    basic: {
      summary: "imperative that S V 구조이며, that절 안에서 조동사 수동태 be mastered가 쓰인 문장입니다.",
      keyPoints: [
        "It is imperative that S V",
        "be mastered 수동태",
        "In order to-v 목적 표현"
      ],
      memoryHook: "imperative that S be p.p."
    },
    deep: {
      chunks: [
        { role: "목적 부사구", text: "In order to speak and write the English language correctly" },
        { role: "가주어", text: "it" },
        { role: "V/C", text: "is imperative" },
        {
          role: "진주어", text: "that the fundamental principles of the grammar be mastered",
          note: "that절이 실제 의미상 주어입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-ADJTHAT",
          evidence: "It is imperative that ...",
          explanation: "imperative 같은 당위·필요성 형용사 뒤 that절에서 동사원형이 쓰일 수 있습니다."
        },
        {
          tagId: "PASS-BASIC-BEPP",
          evidence: "be mastered",
          explanation: "principles가 숙달되는 대상이므로 be + p.p. 수동태가 필요합니다."
        }
      ]
    }
  },

  263: {
    basic: {
      summary: "suggestion 뒤 동격 that절에서 should가 생략되고 not + 동사원형 eat이 쓰인 문장입니다.",
      keyPoints: [
        "suggestion that S V",
        "부정형: not + 동사원형",
        "that절이 suggestion의 내용 설명"
      ],
      memoryHook: "suggestion that S not V"
    },
    deep: {
      chunks: [
        { role: "S", text: "The doctor" },
        { role: "V", text: "gave" },
        { role: "O", text: "the suggestion" },
        {
          role: "동격절", text: "that the child not eat too much sugar",
          note: "suggestion의 내용을 설명하는 that절입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "CLAUSE-MANDATIVE-BARE",
          evidence: "suggestion that the child not eat",
          explanation: "제안·요구 계열 명사 뒤 that절에서 should가 생략되고 동사원형이 올 수 있습니다."
        },
        {
          tagId: "CLAUSE-MANDATIVE-NEGBARE",
          evidence: "not eat",
          explanation: "should 생략 구조의 부정은 not + 동사원형입니다."
        }
      ]
    }
  },

  264: {
    basic: {
      summary: "surprising that S should V 구조로, should가 감정·판단의 뉘앙스를 더하는 특수 용법입니다.",
      keyPoints: [
        "It is surprising that S should V",
        "should print",
        "평판 높은 잡지가 유치한 기사를 싣는다는 놀라움"
      ],
      memoryHook: "surprising that S should V"
    },
    deep: {
      chunks: [
        { role: "가주어", text: "It" },
        { role: "V/C", text: "is certainly surprising" },
        {
          role: "진주어", text: "that such a highly reputable magazine should print such a childish article",
          note: "that절이 실제 의미상 주어입니다."
        }
      ],
      grammarPoints: [
        {
          tagId: "MODAL-SHOULD-EMOTIVE",
          evidence: "should print",
          explanation: "감정·판단 표현 뒤 that절에서 should가 놀라움이나 의외성의 뉘앙스를 나타낼 수 있습니다."
        },
        {
          tagId: "CLAUSE-NOUN-THAT",
          evidence: "that such a highly reputable magazine should print ...",
          explanation: "that절이 문장의 실제 주어 역할을 합니다."
        }
      ]
    }
  }
};
