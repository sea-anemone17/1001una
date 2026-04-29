export const TAG_TAXONOMY = {
  SENT: {
    label: "문장 구조",
    description: "문장의 형식, 성분, 목적어와 보어 구조를 다룹니다.",
    children: {
      FORM: {
        label: "문장 형식",
        children: {
          FORM1: { label: "1형식" },
          FORM2: { label: "2형식" },
          FORM3: { label: "3형식" },
          FORM4: { label: "4형식" },
          FORM5: { label: "5형식" }
        }
      },
      ROLE: {
        label: "문장 성분",
        children: {
          SUBJECT: { label: "주어" },
          VERB: { label: "동사" },
          OBJECT: { label: "목적어" },
          COMPLEMENT: { label: "보어" },
          OC: { label: "목적격보어" },
          MODIFIER: { label: "수식어" }
        }
      }
    }
  },

  VERB: {
    label: "동사·시제·상",
    description: "동사의 유형, 시제, 완료, 진행, 동사 패턴을 다룹니다.",
    children: {
      TENSE: {
        label: "시제",
        children: {
          PRESENT: { label: "현재" },
          PAST: { label: "과거" },
          FUTURE: { label: "미래" },
          SEQUENCE: { label: "시제 일치" }
        }
      },
      ASPECT: {
        label: "상",
        children: {
          PERFECT: { label: "완료" },
          PROGRESSIVE: { label: "진행" },
          PERFECT_PROG: { label: "완료진행" }
        }
      },
      PATTERN: {
        label: "동사 패턴",
        children: {
          V_TO: { label: "V + to-v" },
          V_GERUND: { label: "V + V-ing" },
          V_THAT: { label: "V + that절" },
          V_O_TO: { label: "V + O + to-v" },
          V_O_BARE: { label: "V + O + 원형" }
        }
      }
    }
  },

  MODAL: {
    label: "조동사",
    description: "조동사의 형태, 의미, 완료형, 준조동사 표현을 다룹니다.",
    children: {
      BASIC: {
        label: "기본 조동사",
        children: {
          BASE: { label: "조동사 + 동사원형" },
          NEG: { label: "조동사 부정" },
          QUESTION: { label: "조동사 의문" }
        }
      },
      PERFECT: {
        label: "조동사 완료",
        children: {
          HAVE_PP: { label: "modal + have p.p." },
          SHOULD_HAVE_PP: { label: "should have p.p." },
          MUST_HAVE_PP: { label: "must have p.p." },
          CANNOT_HAVE_PP: { label: "cannot have p.p." }
        }
      }
    }
  },

  PASS: {
    label: "수동태",
    description: "기본 수동태, 조동사 수동태, 4형식/5형식 수동태를 다룹니다.",
    children: {
      BASIC: {
        label: "기본 수동태",
        children: {
          BEPP: { label: "be + p.p." },
          BY_PHRASE: { label: "by 행위자" },
          NO_BY: { label: "by 생략" }
        }
      },
      MODAL: {
        label: "조동사 수동태",
        children: {
          BEPP: { label: "modal + be + p.p." },
          HAVE_BEEN_PP: { label: "modal + have been p.p." }
        }
      },
      FORM4: {
        label: "4형식 수동태",
        children: {
          IO_SUBJECT: { label: "간접목적어 주어 수동태" },
          DO_SUBJECT: { label: "직접목적어 주어 수동태" },
          PREP_TO_FOR: { label: "to/for 전치사 전환" }
        }
      },
      FORM5: {
        label: "5형식 수동태",
        children: {
          OC_TO_KEEP: { label: "목적격보어 유지" },
          BARE_TO_RECOVER: { label: "원형부정사 to-v 복원" },
          PP_OC: { label: "p.p. 목적격보어" },
          ADJ_OC: { label: "형용사 목적격보어" }
        }
      }
    }
  },

  NONFIN: {
    label: "준동사",
    description: "to부정사, 동명사, 분사, 분사구문, 목적격보어 준동사를 다룹니다.",
    children: {
      TOINF: {
        label: "to부정사",
        children: {
          NOUN: { label: "명사적 용법" },
          ADJ: { label: "형용사적 용법" },
          ADV: { label: "부사적 용법" },
          TOO_TO: { label: "too ~ to" },
          ENOUGH_TO: { label: "enough to" },
          WH_TO: { label: "의문사 + to-v" }
        }
      },
      GERUND: {
        label: "동명사",
        children: {
          SUBJECT: { label: "주어" },
          OBJECT: { label: "목적어" },
          PREP_OBJ: { label: "전치사 목적어" },
          POSSESSIVE: { label: "의미상 주어" }
        }
      },
      OC: {
        label: "목적격보어 준동사",
        children: {
          PERCEPTION_BARE: { label: "지각동사 + O + 원형" },
          PERCEPTION_ING: { label: "지각동사 + O + V-ing" },
          PERCEPTION_PP: { label: "지각동사 + O + p.p." },
          MAKE_BARE: { label: "make + O + 원형" },
          HAVE_BARE: { label: "have + O + 원형" },
          HAVE_PP: { label: "have + O + p.p." },
          GET_TO: { label: "get + O + to-v" },
          GET_PP: { label: "get + O + p.p." },
          CAUSE_TO: { label: "cause + O + to-v" }
        }
      }
    }
  },

  CLAUSE: {
    label: "절·접속사",
    description: "명사절, 부사절, 간접의문문, whether/if, 요구·주장 that절을 다룹니다.",
    children: {
      NOUN: {
        label: "명사절",
        children: {
          THAT: { label: "that절" },
          WHETHER: { label: "whether절" },
          IF: { label: "if절" },
          WH: { label: "의문사절" },
          APPOSITIVE: { label: "동격 that절" }
        }
      },
      MANDATIVE: {
        label: "요구·주장·제안·명령",
        children: {
          SHOULD: { label: "that S should V" },
          BARE: { label: "that S 동사원형" },
          NEG_BARE: { label: "that S not V" },
          ADJ_THAT: { label: "It is necessary that S V" }
        }
      },
      IF_WHETHER: {
        label: "if / whether 구분",
        children: {
          WHETHER_OR_NOT: { label: "whether or not" },
          PREP_WHETHER: { label: "전치사 + whether" },
          TO_WHETHER: { label: "whether + to-v" },
          IF_CONDITION: { label: "조건의 if" }
        }
      }
    }
  },

  REL: {
    label: "관계사",
    description: "관계대명사, 관계부사, what, 계속적 용법, 관계사절 축약을 다룹니다.",
    children: {
      PRON: {
        label: "관계대명사",
        children: {
          WHO: { label: "who" },
          WHOM: { label: "whom" },
          WHICH: { label: "which" },
          THAT: { label: "that" },
          WHOSE: { label: "whose" },
          ZERO: { label: "관계대명사 생략" }
        }
      },
      WHAT: {
        label: "관계대명사 what",
        children: {
          NOUNCLAUSE: { label: "what 명사절" },
          SUBJECT: { label: "what 주어 역할" },
          OBJECT: { label: "what 목적어 역할" },
          COMPLEMENT: { label: "what 보어 역할" }
        }
      },
      REDUCED: {
        label: "관계사절 축약",
        children: {
          ING: { label: "V-ing 축약" },
          PP: { label: "p.p. 축약" },
          TOINF: { label: "to-v 축약" }
        }
      }
    }
  },

  COND: {
    label: "가정법·조건",
    description: "가정법 과거, 과거완료, 혼합 가정법, I wish, as if, 조건절 대용 표현을 다룹니다.",
    children: {
      BASIC: {
        label: "기본 가정법",
        children: {
          PAST: { label: "가정법 과거" },
          PAST_PERFECT: { label: "가정법 과거완료" },
          MIXED: { label: "혼합 가정법" }
        }
      },
      IMPLICIT: {
        label: "숨은 조건",
        children: {
          WITHOUT: { label: "without" },
          BUT_FOR: { label: "but for" },
          OTHERWISE: { label: "otherwise" },
          OR: { label: "or" }
        }
      }
    }
  },

  COMP: {
    label: "비교",
    description: "원급, 비교급, 최상급, 배수사, 비교 대상 일치를 다룹니다.",
    children: {
      EQUAL: {
        label: "원급 비교",
        children: {
          AS_AS: { label: "as ~ as" },
          NOT_AS_AS: { label: "not as/so ~ as" }
        }
      },
      COMPARATIVE: {
        label: "비교급",
        children: {
          ER_THAN: { label: "-er than" },
          MORE_THAN: { label: "more ~ than" },
          THE_COMP_THE_COMP: { label: "the 비교급, the 비교급" }
        }
      },
      SUPERLATIVE: {
        label: "최상급",
        children: {
          THE_EST: { label: "the -est" },
          MOST: { label: "the most" },
          ONE_OF_THE: { label: "one of the 최상급" }
        }
      }
    }
  },

  SPEC: {
    label: "특수구문",
    description: "도치, 강조, 생략, 삽입, 동격, 부정구문을 다룹니다.",
    children: {
      INVERSION: {
        label: "도치",
        children: {
          NEGATIVE: { label: "부정어 도치" },
          ONLY: { label: "only 도치" },
          SO_SUCH: { label: "so/such 도치" },
          PLACE: { label: "장소부사 도치" }
        }
      },
      EMPHASIS: {
        label: "강조",
        children: {
          IT_CLEFT: { label: "It is/was ~ that 강조" },
          DO_EMPHATIC: { label: "강조 do" },
          WHAT_CLEFT: { label: "What ~ is/was 강조" }
        }
      },
      APPOSITION: {
        label: "동격",
        children: {
          NOUN_NOUN: { label: "명사 동격" },
          NOUN_THAT: { label: "동격 that절" },
          COMMA_APPOSITION: { label: "콤마 동격" }
        }
      }
    }
  },

  AGR: {
    label: "일치·병렬",
    description: "수 일치, 대명사 일치, 병렬 구조, 상관접속사 병렬을 다룹니다.",
    children: {
      SV: {
        label: "주어-동사 일치",
        children: {
          BASIC: { label: "기본 수 일치" },
          DISTANT_SUBJECT: { label: "주어-동사 거리" },
          EACH_EVERY: { label: "each/every" },
          EITHER_NEITHER: { label: "either/neither" }
        }
      },
      PARALLEL: {
        label: "병렬 구조",
        children: {
          WORD: { label: "단어 병렬" },
          PHRASE: { label: "구 병렬" },
          CLAUSE: { label: "절 병렬" },
          TOINF: { label: "to-v 병렬" },
          GERUND: { label: "동명사 병렬" },
          PP: { label: "p.p. 병렬" }
        }
      },
      CORRELATIVE: {
        label: "상관접속사 병렬",
        children: {
          BOTH_AND: { label: "both A and B" },
          EITHER_OR: { label: "either A or B" },
          NEITHER_NOR: { label: "neither A nor B" },
          NOT_ONLY_BUT_ALSO: { label: "not only A but also B" }
        }
      }
    }
  },

  POS: {
    label: "품사·세부 어법",
    description: "형용사/부사, 관사, 명사 수, 대명사, 전치사, 어순, 혼동 어휘를 다룹니다.",
    children: {
      ADJ_ADV: {
        label: "형용사/부사",
        children: {
          ADJ_VS_ADV: { label: "형용사 vs 부사" },
          LINKING_ADJ: { label: "연결동사 + 형용사" },
          DEGREE: { label: "정도부사" }
        }
      },
      ARTICLE: {
        label: "관사",
        children: {
          A_AN: { label: "a/an" },
          THE: { label: "the" },
          ZERO: { label: "무관사" },
          GENERIC: { label: "총칭 표현" }
        }
      },
      PREP: {
        label: "전치사",
        children: {
          TIME: { label: "시간 전치사" },
          PLACE: { label: "장소 전치사" },
          ABSTRACT: { label: "추상 전치사" },
          DEPENDENT: { label: "동사/형용사와 결합하는 전치사" },
          GERUND: { label: "전치사 + 동명사" }
        }
      }
    }
  }
};
