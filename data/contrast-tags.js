// 1001una v2 Grammar Dictionary v0.3
// Source: 1001una Grammar Master Guide v0.3 Review
// This is an editable first JS dictionary. Review with Unit 37 before full 500-sentence tagging.

export const CONTRAST_TAGS = [
  {
    "id": "CT-PURPOSE-PHRASE-VS-CLAUSE",
    "label": "목적 표현: 구 vs 절",
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "CLAUSE-ADV-PURPOSE-INORDERTHAT",
      "CLAUSE-ADV-PURPOSE-SOTHAT"
    ],
    "category": "purpose",
    "contrastType": "exam-confusion",
    "summary": "to / in order to / so as to 뒤에는 동사원형이 오고, in order that / so that 뒤에는 S+V가 옵니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-ANUMBEROF-THENUMBEROF",
    "label": "a number of / the number of",
    "tagIds": [
      "AGR-SV-ANUMBEROF",
      "AGR-SV-THENUMBEROF"
    ],
    "category": "anumberof",
    "contrastType": "exam-confusion",
    "summary": "a number of는 많은이라는 뜻으로 복수 취급하고, the number of는 ~의 수라는 뜻으로 단수 취급합니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-REMEMBER-TO-GERUND",
    "label": "remember to-v / remember v-ing",
    "tagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "NONFIN-GERUND-OBJECT"
    ],
    "category": "remember",
    "contrastType": "exam-confusion",
    "summary": "remember to-v는 앞으로 할 일을 기억하는 것이고, remember v-ing는 과거에 한 일을 기억하는 것입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-FORGET-TO-GERUND",
    "label": "forget to-v / forget v-ing",
    "tagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "NONFIN-GERUND-OBJECT"
    ],
    "category": "forget",
    "contrastType": "exam-confusion",
    "summary": "forget to-v는 해야 할 일을 잊는 것이고, forget v-ing는 했던 일을 잊는 것입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-REGRET-TO-GERUND",
    "label": "regret to-v / regret v-ing",
    "tagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "NONFIN-GERUND-OBJECT"
    ],
    "category": "regret",
    "contrastType": "exam-confusion",
    "summary": "regret to-v는 유감스럽게도 ~하다는 뜻이고, regret v-ing는 ~한 것을 후회한다는 뜻입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-STOP-TO-GERUND",
    "label": "stop to-v / stop v-ing",
    "tagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "NONFIN-GERUND-OBJECT"
    ],
    "category": "stop",
    "contrastType": "exam-confusion",
    "summary": "stop to-v는 ~하기 위해 멈추는 것이고, stop v-ing는 ~하는 것을 멈추는 것입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-TRY-TO-GERUND",
    "label": "try to-v / try v-ing",
    "tagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "NONFIN-GERUND-OBJECT"
    ],
    "category": "try",
    "contrastType": "exam-confusion",
    "summary": "try to-v는 노력하다, try v-ing는 시험 삼아 해보다의 의미입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-IF-WHETHER",
    "label": "if / whether",
    "tagIds": [
      "CLAUSE-NOUN-IF",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-WHETHER-PREP",
      "CLAUSE-WHETHER-TO"
    ],
    "category": "if",
    "contrastType": "exam-confusion",
    "summary": "whether는 전치사 뒤와 whether to-v에서 쓰이며, if는 조건절로도 쓰입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-BEUSEDTO-USEDTO",
    "label": "used to / be used to",
    "tagIds": [
      "MODAL-IDIOM-USEDTO",
      "MODAL-IDIOM-BEUSEDTO"
    ],
    "category": "beusedto",
    "contrastType": "exam-confusion",
    "summary": "used to V는 과거 습관/상태이고, be used to N/V-ing는 ~에 익숙하다는 뜻입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-USED-TO-WOULD",
    "label": "used to / would",
    "tagIds": [
      "MODAL-IDIOM-USEDTO"
    ],
    "category": "used",
    "contrastType": "exam-confusion",
    "summary": "used to는 과거 습관과 상태 모두 가능하지만 would는 주로 반복 행동에 가깝습니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-BECAUSE-BECAUSEOF",
    "label": "because / because of",
    "tagIds": [
      "CLAUSE-ADV-REASON-BECAUSE",
      "POS-PREP-BECAUSEOF"
    ],
    "category": "because",
    "contrastType": "exam-confusion",
    "summary": "because 뒤에는 S+V가 오고, because of 뒤에는 명사나 동명사가 옵니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-DESPITE-ALTHOUGH",
    "label": "despite / although",
    "tagIds": [
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "POS-PREP-DESPITE"
    ],
    "category": "despite",
    "contrastType": "exam-confusion",
    "summary": "although 뒤에는 S+V가 오고, despite 뒤에는 명사나 동명사가 옵니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-ACTIVE-PASSIVE",
    "label": "능동 / 수동",
    "tagIds": [
      "PASS-BASIC-BEPP"
    ],
    "category": "active",
    "contrastType": "exam-confusion",
    "summary": "능동은 주어가 동작을 하고, 수동은 주어가 동작을 당합니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-PRESENTPART-PASTPART",
    "label": "현재분사 / 과거분사",
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST"
    ],
    "category": "presentpart",
    "contrastType": "exam-confusion",
    "summary": "V-ing는 능동/진행, p.p.는 수동/완료 의미가 중심입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-WHAT-THAT",
    "label": "what / that",
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "CLAUSE-NOUN-THAT"
    ],
    "category": "what",
    "contrastType": "exam-confusion",
    "summary": "what은 선행사를 포함하는 관계대명사이고, that은 명사절 접속사 또는 관계대명사입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-WHO-WHOM",
    "label": "who / whom",
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHOM"
    ],
    "category": "who",
    "contrastType": "exam-confusion",
    "summary": "who는 주격, whom은 목적격입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-COMP-NOMORE-NOTMORE",
    "label": "no more than / not more than",
    "tagIds": [
      "COMP-CMP-NOMORETHAN",
      "COMP-CMP-NOTMORETHAN"
    ],
    "category": "comp",
    "contrastType": "exam-confusion",
    "summary": "no more than은 겨우, not more than은 많아야의 의미입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-COMP-NOLESS-NOTLESS",
    "label": "no less than / not less than",
    "tagIds": [
      "COMP-CMP-NOLESSTHAN",
      "COMP-CMP-NOTLESSTHAN"
    ],
    "category": "comp",
    "contrastType": "exam-confusion",
    "summary": "no less than은 무려, not less than은 적어도의 의미입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-EITHER-NEITHER-BOTH",
    "label": "either / neither / both",
    "tagIds": [
      "AGR-CORR-EITHEROR",
      "AGR-CORR-NEITHERNOR",
      "AGR-CORR-BOTHAND"
    ],
    "category": "either",
    "contrastType": "exam-confusion",
    "summary": "either A or B, neither A nor B, both A and B는 수 일치와 병렬 구조가 다릅니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-HARD-HARDLY",
    "label": "hard / hardly",
    "tagIds": [
      "POS-ADJADV-HARD-HARDLY"
    ],
    "category": "hard",
    "contrastType": "exam-confusion",
    "summary": "hard는 열심히/딱딱한, hardly는 거의 ~않다의 의미입니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  },
  {
    "id": "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD",
    "label": "mandative should / 감정 should",
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD",
      "MODAL-SHOULD-SURPRISE"
    ],
    "category": "mandative",
    "contrastType": "exam-confusion",
    "summary": "요구·주장·제안 that절의 should와 놀람·감정의 should는 역할과 출제 포인트가 다릅니다.",
    "comparison": [],
    "commonErrors": [],
    "examFocus": [],
    "transformRuleIds": [],
    "risk": 5,
    "status": "active"
  }
];
