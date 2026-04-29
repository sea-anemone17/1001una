// 1001una v2 Sentence Tags v0.1 Draft
// Scope: 500 Cheonilmun sentences
// Method: heuristic first-pass tagging based on generated sentences + v0.3 grammar dictionaries.
// ReviewStatus: draft. Use candidateTagIds for later human/AI 검수.

export const GENERATED_SENTENCE_TAGS = {
  "1": {
    "tagIds": [
      "SENT-FORM-1",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "2": {
    "tagIds": [
      "SENT-FORM-1",
      "VERB-ASPECT-PERFECT",
      "COMP-SUPER-MOST",
      "AGR-SV-THENUMBEROF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ANUMBEROF-THENUMBEROF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "3": {
    "tagIds": [
      "SENT-FORM-1",
      "PASS-BASIC-BEPP",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "4": {
    "tagIds": [
      "SENT-FORM-1",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "5": {
    "tagIds": [
      "SENT-FORM-1",
      "CLAUSE-ADV-RESULT-SOTHAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "6": {
    "tagIds": [
      "SENT-FORM-1",
      "REL-WHAT-NOUNCLAUSE",
      "NONFIN-TOINF-ADV-PURPOSE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PURPOSE-TO-INORDERTO",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김",
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "7": {
    "tagIds": [
      "NONFIN-GERUND-SUBJECT",
      "SENT-ROLE-SUBJECT",
      "REL-PRON-WHICH",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "8": {
    "tagIds": [
      "NONFIN-GERUND-SUBJECT",
      "SENT-ROLE-SUBJECT",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "9": {
    "tagIds": [
      "NONFIN-GERUND-SUBJECT",
      "SENT-ROLE-SUBJECT",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "10": {
    "tagIds": [
      "NONFIN-GERUND-SUBJECT",
      "SENT-ROLE-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "11": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-GET-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "12": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "MODAL-BASIC-BASE",
      "CLAUSE-NOUN-WHETHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "13": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "REL-WHAT-NOUNCLAUSE",
      "AGR-CORR-EITHEROR",
      "AGR-CORR-EITHEROR-NEAR",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT",
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "14": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "15": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PROGRESSIVE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "16": {
    "tagIds": [
      "CLAUSE-NOUN-THAT",
      "SENT-ROLE-SUBJECT",
      "REL-COMPOUND-WHATEVER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "17": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "PASS-BASIC-BEPP",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "18": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "COMP-CMP-ERTHAN"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "19": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN",
      "REL-PRON-WHO",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "20": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "REL-PRON-WHICH",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "21": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "22": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "COND-IMPLICIT-WITHOUT",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "23": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "24": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-COMPOUND-WHOEVER",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "25": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-TRY-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "26": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [
      "SENT-ROLE-SUBJECT"
    ],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "27": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "VERB-ASPECT-PERFECT",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-PERFECT",
      "NONFIN-OC-CAUSE-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "28": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "NONFIN-TOINF-SEMANTIC-FOR"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "29": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-MAKE-BARE",
      "NONFIN-OC-PERCEPTION-ING",
      "CLAUSE-ADV-TIME-WHEN",
      "COMP-CMP-ERTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "VERB-TENSE-TIMECLAUSE-FUTURE",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "30": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-ALLOW-TO",
      "COND-IMPLICIT-OTHERWISE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "31": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "32": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT",
      "SENT-IT-EXTRAPOSITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "33": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "34": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "35": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-ENCOURAGE-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "36": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "37": {
    "tagIds": [
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-SEMANTIC-SUBJECT",
      "SENT-THERE-EXISTENTIAL"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "38": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHICH",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "39": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "40": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT",
      "NONFIN-GERUND-SUBJECT",
      "CLAUSE-MANDATIVE-SHOULD"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "41": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "42": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "43": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-NOUN-THAT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-TIME-WHILE",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "44": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "45": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-DENYAVOIDENJOY",
      "AGR-PARALLEL-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-GERUND-TOINF-WRONGVERB",
      "TR-PARALLEL-PP-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "46": {
    "tagIds": [
      "SENT-OBJ-NONFIN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "47": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "NONFIN-TOINF-SEMANTIC-FOR",
      "NONFIN-GERUND-DENYAVOIDENJOY",
      "COMP-EQUAL-ASAS",
      "AGR-PARALLEL-TOINF",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-GERUND-TOINF-WRONGVERB",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "48": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-DENYAVOIDENJOY",
      "NONFIN-OC-PERCEPTION-PP",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-GERUND-TOINF-WRONGVERB"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "49": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-REASON-BECAUSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "50": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-REMEMBER-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-REMEMBER-TO-GERUND-MEANING"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "51": {
    "tagIds": [
      "SENT-OBJ-NONFIN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-REMEMBER-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-REMEMBER-TO-GERUND-MEANING"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "52": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-FORGET-TO-GERUND"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "53": {
    "tagIds": [
      "SENT-OBJ-NONFIN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-FORGET-TO-GERUND"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "54": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-REGRET-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "55": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-REGRET-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "56": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-TRY-TO-GERUND"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "57": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "CLAUSE-ADV-CONDITION",
      "AGR-PARALLEL-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-TRY-TO-GERUND",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-PP-MISMATCH",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "58": {
    "tagIds": [
      "SENT-OBJ-NONFIN",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-STOP-TO-GERUND",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-STOP-TO-GERUND-MEANING"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "59": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "60": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "NONFIN-OC-HELP-BARETO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "61": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "62": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "CLAUSE-NOUN-WHETHER",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "63": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-NOUN-IF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "64": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "65": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "MODAL-BASIC-BASE",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-WHETHER-ORNOT",
      "CLAUSE-ADV-TIME-WHILE",
      "REL-ADV-WHERE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "66": {
    "tagIds": [
      "SENT-OBJ-CLAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "67": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "CLAUSE-NOUN-IF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "68": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "REL-WHAT-NOUNCLAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "69": {
    "tagIds": [
      "SENT-OBJ-CLAUSE",
      "REL-COMPOUND-WHATEVER",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "70": {
    "tagIds": [
      "POS-PREP-GERUND",
      "SENT-OBJ-CLAUSE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "71": {
    "tagIds": [
      "POS-PREP-GERUND",
      "SENT-OBJ-CLAUSE",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "REL-ADV-WHERE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "72": {
    "tagIds": [
      "POS-PREP-GERUND",
      "SENT-OBJ-CLAUSE",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-GERUND-PREPOBJ",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "73": {
    "tagIds": [
      "POS-PREP-GERUND",
      "SENT-OBJ-CLAUSE",
      "PASS-BASIC-BEPP",
      "REL-ADV-THEWAY",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "74": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "75": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PROGRESSIVE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "76": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "COMP-SUPER-MOST",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "77": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "VERB-ASPECT-PROGRESSIVE",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-ADV-TIME-WHILE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "78": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHILE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "79": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "80": {
    "tagIds": [
      "SENT-ROLE-COMP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "81": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "82": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "CLAUSE-ADV-REASON-BECAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "83": {
    "tagIds": [
      "SENT-ROLE-COMP",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-PP",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-PP-MISMATCH",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "84": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "85": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-OC-PERSUADE-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "86": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "87": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "PASS-BASIC-BEPP",
      "NONFIN-OC-ENABLE-TO",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "88": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "89": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-OC-PERCEPTION-ING",
      "NONFIN-OC-PERCEPTION-PP",
      "NONFIN-OC-PERCEPTION-BARE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "90": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-MAKE-BARE",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "91": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "VERB-ASPECT-PROGRESSIVE",
      "AGR-PARALLEL-TOINF",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "92": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-HELP-BARETO",
      "CLAUSE-ADV-CONDITION",
      "COND-BASIC-PAST",
      "COND-ASIF-PAST",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-TO-INORDERTO",
      "TR-REL-WHAT-THAT-WRONG",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "조동사 수동태는 modal + be + p.p. 구조인지 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김",
      "modal + p.p.처럼 be를 누락",
      "in order to 뒤에 S+V 사용",
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "93": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "94": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-OC-PERCEPTION-PP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "95": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "96": {
    "tagIds": [
      "SENT-FORM-2"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "97": {
    "tagIds": [
      "SENT-FORM-2",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "REL-ADV-WHY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "98": {
    "tagIds": [
      "SENT-FORM-2",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "99": {
    "tagIds": [
      "SENT-FORM-2",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "100": {
    "tagIds": [
      "SENT-FORM-2",
      "NONFIN-OC-PERCEPTION-PP",
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-TIME-WHILE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "101": {
    "tagIds": [
      "SENT-FORM-2",
      "COMP-SUPER-THEEST",
      "AGR-SV-EACH-EVERY",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "102": {
    "tagIds": [
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "103": {
    "tagIds": [
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "104": {
    "tagIds": [
      "NONFIN-OC-GET-TO",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "105": {
    "tagIds": [
      "CLAUSE-ADV-REASON-BECAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "106": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "107": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-REASON-BECAUSE",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "COND-ASIF-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-BECAUSE-BECAUSEOF",
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "108": {
    "tagIds": [],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "초벌 태깅 기준으로 추가 검수 필요"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "109": {
    "tagIds": [
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "110": {
    "tagIds": [
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "111": {
    "tagIds": [
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "112": {
    "tagIds": [],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "초벌 태깅 기준으로 추가 검수 필요"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "113": {
    "tagIds": [
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "114": {
    "tagIds": [
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHILE",
      "COND-IMPLICIT-WITHOUT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "115": {
    "tagIds": [
      "SENT-FORM-4",
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "116": {
    "tagIds": [
      "SENT-FORM-4",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "117": {
    "tagIds": [
      "SENT-FORM-4",
      "POS-PREP-DESPITE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "118": {
    "tagIds": [
      "SENT-FORM-4",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "119": {
    "tagIds": [
      "SENT-FORM-4"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "120": {
    "tagIds": [
      "SENT-FORM-4",
      "MODAL-BASIC-BASE",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "121": {
    "tagIds": [
      "SENT-FORM-4"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "122": {
    "tagIds": [
      "SENT-FORM-4",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "123": {
    "tagIds": [
      "SENT-FORM-4",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-SUCHTHAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "124": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "MODAL-BASIC-BASE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "125": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "126": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-ALLOW-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "127": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "128": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-OC-PERCEPTION-BARE",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "129": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "NONFIN-OC-ENCOURAGE-TO",
      "CLAUSE-ADV-REASON-BECAUSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "130": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "131": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "REL-WHAT-NOUNCLAUSE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-PERCEPTION-ING",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "132": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "133": {
    "tagIds": [
      "SENT-FORM-5",
      "SENT-ROLE-OC",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "134": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "135": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING",
      "MODAL-BASIC-BASE",
      "COMP-CMP-THECOMP",
      "POS-DETERMINER-LITTLE-ALITTLE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-COMP-THECOMP"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "136": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-GERUND-DENYAVOIDENJOY",
      "CLAUSE-ADV-TIME-WHEN",
      "SPEC-INV-ONLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-GERUND-TOINF-WRONGVERB",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "137": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "138": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "139": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "SENT-OBJ-FRONTING",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-CORR-NEITHERNOR",
      "AGR-CORR-NEITHERNOR-NEAR",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "140": {
    "tagIds": [
      "SENT-COMP-FRONTING"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "141": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "142": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "COMP-EQUAL-ASAS",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "143": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "NONFIN-OC-HAVE-PP",
      "COMP-SUPER-MOST",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "144": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "NONFIN-TOINF-SEMANTIC-OF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "145": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "146": {
    "tagIds": [
      "SENT-COMP-FRONTING",
      "MODAL-BASIC-BASE",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "147": {
    "tagIds": [
      "SENT-COMP-FRONTING"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "148": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "SENT-IT-EXTRAPOSITION",
      "COMP-CMP-MORETHAN",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "149": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-TENSE-FUTURE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "150": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "151": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-TIME-WHEN",
      "COMP-SUPER-THEEST",
      "AGR-SV-EACH-EVERY",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "152": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "SENT-THERE-EXISTENTIAL",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-CONDITION-ASLONGAS",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "153": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHICH",
      "COND-IMPLICIT-OTHERWISE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "154": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "155": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "156": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "157": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "SENT-IT-DUMMYOBJECT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "158": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "159": {
    "tagIds": [
      "SENT-OBJ-FRONTING",
      "SENT-OBJ-DELAYED",
      "SENT-IT-DUMMYOBJECT",
      "NONFIN-GERUND-DENYAVOIDENJOY",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-GERUND-TOINF-WRONGVERB",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "160": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "161": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "COMP-SUPER-THEEST",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "162": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "MODAL-BASIC-BASE",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "163": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "164": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "REL-PRON-WHO",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "165": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "166": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHILE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "167": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "CLAUSE-ADV-CONDITION",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "168": {
    "tagIds": [
      "SPEC-INSERTION-PARENTHETICAL",
      "PASS-BASIC-BEPP",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "169": {
    "tagIds": [
      "SPEC-INSERTION-PARENTHETICAL",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "170": {
    "tagIds": [
      "SPEC-INSERTION-PARENTHETICAL",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHILE",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "171": {
    "tagIds": [
      "SPEC-INSERTION-PARENTHETICAL",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "SPEC-INSERTION-IFANY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "172": {
    "tagIds": [
      "SPEC-INSERTION-PARENTHETICAL",
      "CLAUSE-ADV-CONDITION",
      "COMP-CMP-MORETHAN",
      "SPEC-INSERTION-IFNOT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "173": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "174": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "NONFIN-OC-MAKE-BARE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "175": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "SENT-THERE-EXISTENTIAL",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "176": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "VERB-ASPECT-PERFECT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHICH",
      "COMP-CMP-MORETHAN",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "177": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "178": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "179": {
    "tagIds": [
      "SPEC-APPOS-NOUNNOUN",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "CLAUSE-NOUN-WHETHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "180": {
    "tagIds": [
      "VERB-TENSE-PRESENT",
      "VERB-ASPECT-PROGRESSIVE",
      "REL-WHAT-NOUNCLAUSE",
      "COND-IMPLICIT-WITHOUT",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "가정법의 시제와 도치 가능성 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김",
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "181": {
    "tagIds": [
      "VERB-TENSE-PRESENT",
      "VERB-ASPECT-PROGRESSIVE",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "COMP-CMP-LESSTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "182": {
    "tagIds": [
      "VERB-TENSE-PRESENT",
      "VERB-ASPECT-PROGRESSIVE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "183": {
    "tagIds": [
      "VERB-TENSE-PRESENT",
      "VERB-ASPECT-PROGRESSIVE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "184": {
    "tagIds": [
      "VERB-TENSE-PRESENT",
      "VERB-ASPECT-PROGRESSIVE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "185": {
    "tagIds": [
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "NONFIN-OC-HAVE-PP",
      "NONFIN-OC-HELP-BARETO",
      "COMP-SUPER-THEEST",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "186": {
    "tagIds": [
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "187": {
    "tagIds": [
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "188": {
    "tagIds": [
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "189": {
    "tagIds": [
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "VERB-ASPECT-PERFECT",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "190": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "191": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "192": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-TENSE-FUTURE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "193": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-HAVE-PP",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "194": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "SENT-THERE-EXISTENTIAL",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "195": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-REASON-BECAUSE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "196": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-TENSE-FUTURE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "COMP-SUPER-THEEST",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "197": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "NONFIN-OC-GET-TO",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "198": {
    "tagIds": [
      "VERB-ASPECT-PASTPERF-BEFORE",
      "VERB-ASPECT-FUTUREPERF-BY",
      "VERB-TENSE-FUTURE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-PERCEPTION-ING",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "199": {
    "tagIds": [
      "COND-BASIC-PAST",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈",
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "200": {
    "tagIds": [
      "COND-BASIC-PAST",
      "SENT-THERE-EXISTENTIAL",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "COND-IFONLY",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "201": {
    "tagIds": [
      "COND-BASIC-PAST",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "COMP-CMP-ERTHAN",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "202": {
    "tagIds": [
      "COND-BASIC-PAST",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "COND-INVERSION-WERE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "203": {
    "tagIds": [
      "COND-BASIC-PAST",
      "MODAL-BASIC-BASE",
      "COND-INVERSION-SHOULD"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-COND-IF-INVERSION-SHOULD"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "204": {
    "tagIds": [
      "COND-BASIC-PAST",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "205": {
    "tagIds": [
      "COND-BASIC-PAST",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "206": {
    "tagIds": [
      "COND-BASIC-PAST",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION",
      "COND-ASIF-PAST",
      "COMP-SUPER-MOST",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "207": {
    "tagIds": [
      "COND-BASIC-PAST",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "COND-ASIF-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "208": {
    "tagIds": [
      "COND-BASIC-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "209": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-COULDHAVEPP",
      "MODAL-IDIOM-USEDTO",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "210": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "211": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "CLAUSE-ADV-REASON-BECAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "212": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "COND-WISH-PAST",
      "AGR-PARALLEL-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-PP-MISMATCH",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈",
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "213": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "NONFIN-OC-HAVE-PP",
      "NONFIN-OC-PERCEPTION-PP",
      "CLAUSE-ADV-CONDITION",
      "COND-BASIC-PAST",
      "COND-ASIF-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "214": {
    "tagIds": [
      "COND-BASIC-PASTPERF",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION",
      "CLAUSE-ADV-TIME-WHEN",
      "COND-ASIF-PAST"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "215": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "216": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-WOULDHAVEPP",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "217": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION",
      "REL-ADV-WHERE",
      "COND-BASIC-PAST",
      "COND-BASIC-PASTPERF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "218": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "219": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈",
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "220": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-COULDHAVEPP",
      "NONFIN-OC-HAVE-PP",
      "COMP-CMP-ERTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "221": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "222": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "223": {
    "tagIds": [
      "COND-IMPLICIT-WITHOUT",
      "COND-IMPLICIT-BUTFOR",
      "COND-IMPLICIT-OTHERWISE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-MIGHTHAVEPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "224": {
    "tagIds": [
      "NONFIN-TOINF-PERFECT",
      "NONFIN-GERUND-PERFECT",
      "VERB-ASPECT-PERFECT",
      "PASS-BASIC-BEPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "225": {
    "tagIds": [
      "NONFIN-TOINF-PERFECT",
      "NONFIN-GERUND-PERFECT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "226": {
    "tagIds": [
      "NONFIN-TOINF-PERFECT",
      "NONFIN-GERUND-PERFECT",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "227": {
    "tagIds": [
      "NONFIN-TOINF-PERFECT",
      "NONFIN-GERUND-PERFECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "228": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "229": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "SENT-IT-EXTRAPOSITION",
      "AGR-PARALLEL-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-PP-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "230": {
    "tagIds": [
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "231": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "232": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-IDIOM-USEDTO",
      "PASS-ASPECT-BEBEINGPP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "233": {
    "tagIds": [
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "234": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "POS-DETERMINER-LITTLE-ALITTLE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "235": {
    "tagIds": [
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PERFECT",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "236": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "SENT-IT-EXTRAPOSITION",
      "PASS-REPORT-ITISSAIDTHAT",
      "NONFIN-TOINF-ADV-PURPOSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "237": {
    "tagIds": [
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "AGR-SV-EACH-EVERY",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "238": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-REASON-BECAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "239": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "PASS-CAUSATIVE-MADETO",
      "PASS-FORM5-BARETO",
      "POS-PREP-DESPITE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PASS-FORM5-BARETO"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "240": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "241": {
    "tagIds": [
      "PASS-BASIC-BEPP",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "242": {
    "tagIds": [
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "243": {
    "tagIds": [
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-GERUND-PASSIVE",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ENOUGH-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "244": {
    "tagIds": [
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-GERUND-PASSIVE",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "245": {
    "tagIds": [
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-GERUND-PASSIVE",
      "VERB-ASPECT-PERFECT",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-TOINF-PERFECT",
      "NONFIN-OC-HAVE-PP",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "246": {
    "tagIds": [
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-GERUND-PASSIVE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "POS-PREP-DESPITE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "247": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "248": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "249": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "250": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "POS-ADJADV-HARD-HARDLY",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-HARD-HARDLY"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "251": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HELP-BARETO",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "252": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-TRY-TO-GERUND"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "253": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-PERCEPTION-PP",
      "NONFIN-OC-HELP-BARETO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "254": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-MANDATIVE-SHOULD"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "255": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-MUSTHAVEPP",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "256": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-MAYHAVEPP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "257": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-ASPECT-PERFECT",
      "MODAL-PERF-CANNOTHAVEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "258": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "MODAL-PERF-SHOULDHAVEPP",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "259": {
    "tagIds": [
      "MODAL-DEDUCTION-MAYMIGHTBE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "260": {
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "AGR-PARALLEL-PP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-MANDATIVE-SHOULD-TO-BARE",
      "TR-PARALLEL-PP-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인",
      "조동사 수동태는 modal + be + p.p. 구조인지 확인",
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용",
      "modal + p.p.처럼 be를 누락",
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "261": {
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD",
      "SENT-IT-EXTRAPOSITION",
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PURPOSE-TO-INORDERTO",
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용",
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "262": {
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-PURPOSE-PHRASE-VS-CLAUSE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PURPOSE-TO-INORDERTO",
      "TR-MANDATIVE-SHOULD-TO-BARE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용",
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "263": {
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "264": {
    "tagIds": [
      "CLAUSE-MANDATIVE-SHOULD",
      "SENT-IT-EXTRAPOSITION",
      "MODAL-BASIC-BASE",
      "MODAL-SHOULD-SURPRISE",
      "POS-ADJADV-HIGH-HIGHLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "265": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "MODAL-IDIOM-USEDTO",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "266": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "267": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-OC-HELP-BARETO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "268": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP",
      "POS-ADJADV-HIGH-HIGHLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "269": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "MODAL-IDIOM-MAYWELL"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "270": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "MODAL-BASIC-BASE",
      "MODAL-IDIOM-MAYASWELL",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "271": {
    "tagIds": [
      "MODAL-IDIOM-CANNOTHELPVING",
      "MODAL-IDIOM-CANNOTTOO",
      "MODAL-IDIOM-WOULDRATHER",
      "MODAL-BASIC-BASE",
      "COND-WOULDRATHER-S-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "272": {
    "tagIds": [
      "NONFIN-TOINF-ADJ",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "273": {
    "tagIds": [
      "NONFIN-TOINF-ADJ",
      "CLAUSE-ADV-REASON-BECAUSE",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "274": {
    "tagIds": [
      "NONFIN-TOINF-ADJ",
      "SENT-IT-EXTRAPOSITION",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "275": {
    "tagIds": [
      "NONFIN-TOINF-ADJ",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "276": {
    "tagIds": [
      "NONFIN-TOINF-ADJ",
      "REL-COMPOUND-WHATEVER",
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "277": {
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "CLAUSE-ADV-TIME-WHILE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PRESENTPART-PASTPART"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "278": {
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PRESENTPART-PASTPART"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "279": {
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PRESENTPART-PASTPART"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "280": {
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PRESENTPART-PASTPART"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "281": {
    "tagIds": [
      "NONFIN-PARTICIPLE-PRESENT",
      "NONFIN-PARTICIPLE-PAST",
      "CLAUSE-ADV-REASON-BECAUSE",
      "POS-PREP-BECAUSEOF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PRESENTPART-PASTPART",
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "282": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "283": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "PASS-BASIC-BEPP",
      "SPEC-INV-ONLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "284": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "REL-PREP-WHICH",
      "REL-QUANT-OFWHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "285": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHILE",
      "REL-PRON-WHOM",
      "AGR-PARALLEL-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHO-WHOM"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-PP-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "286": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "287": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "288": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "VERB-ASPECT-PERFECT",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-HAVE-PP",
      "NONFIN-OC-PERCEPTION-PP",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "289": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "COMP-SUPER-MOST",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "290": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "291": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "REL-PRON-WHOM",
      "REL-PREP-WHOM"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHO-WHOM"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "292": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "REL-PREP-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "293": {
    "tagIds": [
      "REL-PRON-WHO",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-HELP-BARETO",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "294": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "SENT-IT-EXTRAPOSITION",
      "SENT-THERE-EXISTENTIAL",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "295": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "MODAL-BASIC-BASE",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "296": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "MODAL-BASIC-BASE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "297": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "SENT-IT-EXTRAPOSITION",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "298": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "CLAUSE-ADV-TIME-WHEN",
      "REL-ADV-THEWAY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "299": {
    "tagIds": [
      "REL-ADV-WHERE",
      "REL-ADV-WHEN",
      "REL-ADV-WHY",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "300": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "301": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "REL-COMPOUND-WHOEVER",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "302": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김",
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "303": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "304": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "REL-COMPOUND-WHICHEVER",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "305": {
    "tagIds": [
      "REL-WHAT-NOUNCLAUSE",
      "REL-COMPOUND-WHATEVER",
      "VERB-ASPECT-PERFECT",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "306": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "SENT-IT-EXTRAPOSITION",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "307": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "VERB-ASPECT-PERFECT",
      "REL-PRON-WHICH",
      "REL-PREP-WHICH",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "308": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "309": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "310": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "REL-PRON-WHICH",
      "REL-PREP-WHICH",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "311": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "312": {
    "tagIds": [
      "REL-CONTINUATIVE-WHICH",
      "REL-ADV-WHERE",
      "POS-ADJADV-CLOSE-CLOSELY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "313": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "CLAUSE-NOUN-WHETHER",
      "REL-PRON-WHOM"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER",
      "CT-WHO-WHOM"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "314": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "PASS-BASIC-BEPP",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-REASON-BECAUSE",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-BECAUSE-BECAUSEOF",
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "315": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "COMP-CMP-MORETHAN",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "316": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "317": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "PASS-GETPASSIVE",
      "COND-IMPLICIT-WITHOUT",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "318": {
    "tagIds": [
      "REL-PRON-ZERO",
      "REL-REDUCED-PP",
      "REL-REDUCED-ING",
      "REL-ADV-WHERE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "319": {
    "tagIds": [
      "REL-QUANT-OFWHICH",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE",
      "REL-PRON-WHICH",
      "REL-PREP-WHICH",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "320": {
    "tagIds": [
      "REL-QUANT-OFWHICH",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP",
      "REL-PRON-WHOM",
      "REL-PREP-WHOM",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHO-WHOM"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "321": {
    "tagIds": [
      "REL-QUANT-OFWHICH",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-PRON-WHICH",
      "REL-PREP-WHICH",
      "AGR-SV-EACH-EVERY",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "322": {
    "tagIds": [
      "REL-QUANT-OFWHICH",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHICH",
      "REL-PREP-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "323": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "CLAUSE-ADV-TIME-WHEN",
      "REL-PRON-THAT",
      "COMP-SUPER-MOST",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "324": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "325": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "326": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "NONFIN-TOINF-SEMANTIC-OF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "327": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "COMP-EQUAL-ASAS",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "328": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "329": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "REL-PRON-THAT",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "330": {
    "tagIds": [
      "REL-REDUCED-PP",
      "REL-PRON-WHICH",
      "SENT-THERE-EXISTENTIAL",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "331": {
    "tagIds": [
      "REL-DOUBLE-RELCLAUSE",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "332": {
    "tagIds": [
      "REL-DOUBLE-RELCLAUSE",
      "MODAL-BASIC-BASE",
      "REL-PRON-THAT",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "333": {
    "tagIds": [
      "REL-DOUBLE-RELCLAUSE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "REL-PRON-WHO",
      "REL-PRON-WHOSE",
      "SPEC-INV-ONLY",
      "AGR-PARALLEL-TOINF",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "334": {
    "tagIds": [
      "REL-DOUBLE-RELCLAUSE",
      "REL-WHAT-NOUNCLAUSE",
      "CLAUSE-ADV-REASON-BECAUSE",
      "REL-PRON-WHO",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "335": {
    "tagIds": [
      "REL-DOUBLE-RELCLAUSE",
      "MODAL-BASIC-BASE",
      "REL-PRON-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "336": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION",
      "REL-PRON-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "337": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "338": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "339": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "MODAL-BASIC-BASE",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-WHETHER-PREP",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "340": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "REL-PRON-THAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "341": {
    "tagIds": [
      "SENT-LONG-SUBJECT",
      "REL-ANTECEDENT-DISTANT",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "VERB-TENSE-TIMECLAUSE-FUTURE",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "342": {
    "tagIds": [
      "REL-INSERTION-ITHINK",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "343": {
    "tagIds": [
      "REL-INSERTION-ITHINK",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "REL-PRON-THAT",
      "REL-ADV-THEWAY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "344": {
    "tagIds": [
      "REL-INSERTION-ITHINK",
      "REL-WHAT-NOUNCLAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "345": {
    "tagIds": [
      "REL-INSERTION-ITHINK",
      "VERB-ASPECT-PROGRESSIVE",
      "MODAL-BASIC-BASE",
      "PASS-ASPECT-BEBEINGPP",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-CAUSE-TO",
      "REL-PRON-THAT",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "346": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용",
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "347": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "348": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "MODAL-BASIC-BASE",
      "NONFIN-TOINF-SEMANTIC-OF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "349": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "350": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "SENT-IT-EXTRAPOSITION",
      "MODAL-BASIC-BASE",
      "CLAUSE-MANDATIVE-SHOULD"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO",
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용",
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "351": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-SEMANTIC-OF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용",
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "352": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "MODAL-BASIC-BASE",
      "NONFIN-OC-PERCEPTION-PP",
      "NONFIN-OC-ALLOW-TO",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "353": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CONDITION",
      "COND-BASIC-PAST",
      "COND-BASIC-PASTPERF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용",
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "354": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "COMP-SUPER-MOST",
      "AGR-SV-EACH-EVERY",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "355": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "REL-ADV-WHERE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "356": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "AGR-CORR-BOTHAND",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "357": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-ONLYTO",
      "NONFIN-GERUND-SUBJECT",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "358": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "359": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "360": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-SEMANTIC-FOR"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "361": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-TOO-TO",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "362": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "VERB-ASPECT-PERFECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "363": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-ENOUGH-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "364": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-TOO-TO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "365": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "366": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-TOINF-ENOUGH-TO",
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "367": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "368": {
    "tagIds": [
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "369": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "370": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PROGRESSIVE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "371": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "372": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "CLAUSE-ADV-REASON-BECAUSE",
      "CLAUSE-ADV-TIME-WHILE",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "373": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHILE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "374": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "375": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "376": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "377": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "378": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-IDIOM-BESUPPOSEDTO",
      "CLAUSE-ADV-REASON-BECAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "379": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PERFECT",
      "VERB-ASPECT-PRESENTPERF-SINCEFOR",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "380": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "381": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "MODAL-IDIOM-USEDTO",
      "PASS-MODAL-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "NONFIN-OC-PERSUADE-TO",
      "CLAUSE-ADV-PURPOSE-SOTHAT"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "382": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "383": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-IT-EXTRAPOSITION",
      "REL-WHAT-NOUNCLAUSE",
      "CLAUSE-ADV-RESULT-SOTHAT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "384": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "385": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "MODAL-IDIOM-USEDTO",
      "PASS-MODAL-BEPP",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-SUCHTHAT"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "386": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PASTPERF-BEFORE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-PURPOSE-SOTHAT",
      "AGR-PARALLEL-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-PURPOSE-PHRASE-VS-CLAUSE"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-PP-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "387": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-IT-EXTRAPOSITION",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-CONDITION"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "388": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-OC-PERCEPTION-PP",
      "COMP-SUPER-THEEST",
      "COMP-SUPER-ONEOFTHE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "389": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "AGR-SV-PERCENT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "390": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-THERE-EXISTENTIAL",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ENOUGH-TO",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-TIME-THEMOMENT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "391": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "CLAUSE-ADV-TIME-BYTHETIME",
      "COMP-SUPER-THEEST",
      "COMP-SUPER-ONEOFTHE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "392": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "CLAUSE-ADV-TIME-EVERYTIME",
      "AGR-SV-EACH-EVERY",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "393": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "394": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-THERE-EXISTENTIAL",
      "NONFIN-OC-PERCEPTION-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "395": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "396": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "397": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-IDIOM-USEDTO",
      "PASS-BASIC-BEPP",
      "REL-ADV-THEWAY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "398": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-THERE-EXISTENTIAL",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "399": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CORRELATIVE-NOSOONER",
      "SPEC-INV-NOSOONER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "400": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-CORRELATIVE-HARDLYWHEN",
      "SPEC-INV-HARDLY",
      "POS-ADJADV-HARD-HARDLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-HARD-HARDLY"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "401": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "CLAUSE-ADV-REASON-BECAUSE",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "402": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-WHETHER-ORNOT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "403": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "PASS-BASIC-BEPP",
      "SPEC-NEG-NOTNECESSARILY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "404": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-CONDITION-ASLONGAS",
      "REL-PRON-WHICH",
      "REL-ADV-WHY",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "405": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-CONDITION",
      "CLAUSE-ADV-CONDITION-ASLONGAS",
      "COMP-EQUAL-ASAS",
      "AGR-SV-EACH-EVERY",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "406": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "407": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "SENT-THERE-EXISTENTIAL",
      "CLAUSE-ADV-REASON-BECAUSE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "408": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-TOINF-ADV-PURPOSE",
      "CLAUSE-ADV-CONDITION-UNLESS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "409": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-WHAT-NOUNCLAUSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "410": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "411": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "MODAL-BASIC-BASE",
      "NONFIN-TOINF-TOO-TO",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "412": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-COMPOUND-WHATEVER",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "413": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-COMPOUND-WHOEVER",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "REL-PRON-WHO"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "414": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "CLAUSE-ADV-TIME-EVERYTIME"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "415": {
    "tagIds": [
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "VERB-ASPECT-PERFECT",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "416": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "VERB-ASPECT-PROGRESSIVE",
      "AGR-PARALLEL-GERUND"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "417": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "418": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "419": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "420": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-MANDATIVE-SHOULD",
      "COMP-SUPER-MOST",
      "COMP-SUPER-ONEOFTHE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-MANDATIVE-SHOULD-TO-BARE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "421": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "422": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "423": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "CLAUSE-ADV-TIME-WHILE",
      "COMP-SUPER-MOST",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "424": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "CLAUSE-ADV-TIME-WHEN",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "425": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-GERUND-SUBJECT",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "426": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "427": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "428": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "429": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "430": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE",
      "SPEC-NEG-PARTIAL"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "431": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "432": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "433": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "CLAUSE-ADV-CONDITION-UNLESS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "434": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "COMP-SUPER-THEEST",
      "COMP-SUPER-ONEOFTHE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "435": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "436": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "437": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "438": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "439": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "SENT-IT-EXTRAPOSITION",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "440": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "SENT-IT-EXTRAPOSITION",
      "VERB-ASPECT-PERFECT",
      "PASS-ASPECT-HAVEBEENPP",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "441": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "VERB-ASPECT-PROGRESSIVE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "442": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "443": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "444": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "SENT-IT-EXTRAPOSITION",
      "REL-ADV-THEWAY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "445": {
    "tagIds": [
      "NONFIN-PARTCON-BASIC",
      "CLAUSE-ADV-TIME-WHEN",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "446": {
    "tagIds": [
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "447": {
    "tagIds": [
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "448": {
    "tagIds": [
      "COMP-EQUAL-ASAS",
      "NONFIN-GERUND-SUBJECT",
      "COMP-CMP-LESSTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "449": {
    "tagIds": [
      "COMP-EQUAL-ASAS",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "NONFIN-OC-HAVE-PP",
      "COND-IMPLICIT-WITHOUT",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "450": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "NONFIN-OC-HAVE-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "451": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "CLAUSE-ADV-REASON-BECAUSE",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "452": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "REL-PRON-WHO"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "453": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "PASS-BASIC-BEPP",
      "COMP-CMP-LESSTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "454": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "MODAL-BASIC-BASE",
      "NONFIN-GERUND-SUBJECT",
      "COMP-CMP-MORETHAN",
      "COMP-CMP-LESSTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "455": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "REL-WHAT-NOUNCLAUSE",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "456": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "COMP-EQUAL-NOTASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "457": {
    "tagIds": [
      "COMP-CMP-ERTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "458": {
    "tagIds": [
      "COMP-CMP-ERTHAN",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHO",
      "COMP-CMP-MORETHAN",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "459": {
    "tagIds": [
      "COMP-SUPER-MOST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "460": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "VERB-ASPECT-PROGRESSIVE",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "461": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHEN",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "462": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "SENT-THERE-EXISTENTIAL"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "463": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "SENT-IT-EXTRAPOSITION",
      "SENT-THERE-EXISTENTIAL",
      "VERB-ASPECT-PROGRESSIVE",
      "COMP-CMP-MORETHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-EMPH-ITCLEFT",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "464": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "COMP-EQUAL-ASAS"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 1,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "465": {
    "tagIds": [
      "COMP-SUPER-MOST",
      "VERB-ASPECT-PROGRESSIVE",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-REASON-BECAUSE",
      "POS-PREP-BECAUSEOF",
      "COMP-CMP-ERTHAN",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "466": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "467": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "NONFIN-OC-GET-PP"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "468": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN",
      "COMP-CMP-THECOMP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-REL-WHAT-THAT-WRONG",
      "TR-COMP-THECOMP"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "469": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "VERB-ASPECT-PROGRESSIVE",
      "VERB-ASPECT-PERFECT",
      "NONFIN-TOINF-ADV-PURPOSE",
      "NONFIN-OC-HAVE-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PURPOSE-TO-INORDERTO",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "470": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-TIME-WHEN",
      "COMP-EQUAL-ASAS",
      "POS-DETERMINER-FEW-AFEW"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "471": {
    "tagIds": [
      "COMP-CMP-LESSTHAN",
      "COMP-SUPER-MOST",
      "COMP-SUPER-THEEST",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "472": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "CLAUSE-ADV-TIME-WHEN",
      "CLAUSE-ADV-TIME-WHILE",
      "SPEC-INV-ONLY"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "473": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "SENT-IT-EXTRAPOSITION",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "474": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "CLAUSE-ADV-CONCESSION-ALTHOUGH",
      "REL-PRON-WHO",
      "COMP-SUPER-MOST",
      "AGR-PARALLEL-TOINF",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-DESPITE-ALTHOUGH"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-EMPH-DO",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "475": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "REL-WHAT-NOUNCLAUSE",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-ADV-PURPOSE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-PURPOSE-PHRASE-VS-CLAUSE",
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-PURPOSE-INORDERTO-SOASTO",
      "TR-PURPOSE-INORDERTO-INORDERTHAT",
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "목적 표현 to/in order to/so as to 뒤에는 동사원형"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김",
      "in order to 뒤에 S+V 사용"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "476": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "477": {
    "tagIds": [
      "SPEC-EMPH-ITCLEFT",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "478": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "PASS-BASIC-BEPP"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "479": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PERFECT",
      "NONFIN-GERUND-SUBJECT"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "480": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "PASS-BASIC-BEPP",
      "CLAUSE-NOUN-WHETHER",
      "CLAUSE-WHETHER-ORNOT",
      "COMP-CMP-ERTHAN",
      "COMP-CMP-RATHERTHAN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "481": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "PASS-BASIC-BEPP",
      "NONFIN-TOINF-PASSIVE",
      "NONFIN-OC-HAVE-PP",
      "CLAUSE-MANDATIVE-SHOULD",
      "AGR-PARALLEL-PP",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-MANDATIVE-SHOULD-VS-MODAL-SHOULD"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE",
      "TR-MANDATIVE-SHOULD-TO-BARE",
      "TR-PARALLEL-PP-MISMATCH",
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE"
    ],
    "examPoints": [
      "요구·주장·제안·명령/필수성 that절에서 should + 동사원형 또는 동사원형 확인",
      "and 앞뒤가 같은 p.p. 병렬인지 확인"
    ],
    "traps": [
      "should 뒤에 to-v나 과거형 사용",
      "p.p. and V-ing로 병렬 붕괴"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "482": {
    "tagIds": [
      "SPEC-ELLIPSIS-CONJ",
      "PASS-BASIC-BEPP",
      "REL-PRON-WHICH",
      "REL-ADV-THEWAY",
      "AGR-CORR-BOTHAND",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE",
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "483": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "484": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "NONFIN-TOINF-TOO-TO",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "485": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "MODAL-BASIC-BASE",
      "PASS-MODAL-BEPP",
      "COMP-CMP-ERTHAN",
      "COMP-CMP-RATHERTHAN"
    ],
    "subTagIds": [
      "PASS-BASIC-BEPP"
    ],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-MODAL-BEPP",
      "TR-PASS-MODAL-DROPBE",
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "조동사 수동태는 modal + be + p.p. 구조인지 확인",
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [
      "modal + p.p.처럼 be를 누락"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "486": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "AGR-CORR-BOTHAND",
      "AGR-PARALLEL-TOINF"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [
      "TR-PARALLEL-TOINF-MISMATCH"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "487": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "MODAL-BASIC-BASE",
      "REL-ADV-THEWAY",
      "AGR-CORR-EITHEROR",
      "AGR-CORR-EITHEROR-NEAR"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-EITHER-NEITHER-BOTH"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "488": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "SENT-THERE-EXISTENTIAL",
      "VERB-ASPECT-PROGRESSIVE",
      "PASS-BASIC-BEPP",
      "CLAUSE-ADV-TIME-WHEN"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "489": {
    "tagIds": [
      "AGR-PARALLEL-PHRASE",
      "SPEC-INV-ONLY",
      "AGR-CORR-NOTONLYBUTALSO",
      "AGR-CORR-NOTONLYBUTALSO-AGREEMENT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-CORR-NOTONLY-BUTALSO"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "490": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "REL-WHAT-NOUNCLAUSE",
      "MODAL-BASIC-BASE"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "491": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "492": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "PASS-BASIC-BEPP",
      "SPEC-NEG-NOTNECESSARILY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-PP",
      "POS-PRON-IT-THAT-ONE",
      "POS-ARTICLE-AAN"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "493": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "CLAUSE-ADV-CONDITION",
      "REL-PRON-WHICH"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "494": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "NONFIN-GERUND-PREPOBJ",
      "POS-PREP-GERUND",
      "COND-IMPLICIT-WITHOUT"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "가정법의 시제와 도치 가능성 확인"
    ],
    "traps": [
      "가정법 시제를 직설법 시제로 바꿈"
    ],
    "difficulty": "고난도",
    "risk": 4,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "495": {
    "tagIds": [
      "SPEC-NEG-PARTIAL",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION-UNLESS",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "496": {
    "tagIds": [
      "POS-PRON-IT-THAT-ONE",
      "REL-WHAT-NOUNCLAUSE",
      "VERB-ASPECT-PERFECT",
      "AGR-SV-EACH-EVERY"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-WHAT-THAT"
    ],
    "transformableRuleIds": [
      "TR-REL-WHAT-THAT-WRONG"
    ],
    "candidateTagIds": [
      "NONFIN-TOINF-NOUN-OBJECT",
      "CLAUSE-NOUN-WH",
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "what은 선행사를 포함하므로 뒤에 불완전한 절이 오는지 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [
      "what을 that으로 바꾸어 불완전절을 남김"
    ],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "497": {
    "tagIds": [
      "POS-PRON-IT-THAT-ONE",
      "SENT-IT-EXTRAPOSITION",
      "POS-PRON-OTHER-ANOTHER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "SPEC-INV-NEGATIVE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "문장 핵심 구조와 주요 태그의 형태를 확인"
    ],
    "traps": [],
    "difficulty": "저난도",
    "risk": 2,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "498": {
    "tagIds": [
      "POS-PRON-IT-THAT-ONE",
      "MODAL-BASIC-BASE",
      "CLAUSE-ADV-CONDITION",
      "CLAUSE-ADV-REASON-BECAUSE",
      "COMP-SUPER-THEEST"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-IF-WHETHER",
      "CT-BECAUSE-BECAUSEOF"
    ],
    "transformableRuleIds": [],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "중난도",
    "risk": 3,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "499": {
    "tagIds": [
      "POS-PRON-IT-THAT-ONE",
      "VERB-TENSE-FUTURE",
      "MODAL-BASIC-BASE",
      "COMP-EQUAL-ASAS",
      "COMP-CMP-THECOMP",
      "POS-PRON-FORMER-LATTER"
    ],
    "subTagIds": [],
    "contrastTagIds": [],
    "transformableRuleIds": [
      "TR-COMP-THECOMP"
    ],
    "candidateTagIds": [
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  },
  "500": {
    "tagIds": [
      "POS-PRON-IT-THAT-ONE",
      "SENT-IT-EXTRAPOSITION",
      "MODAL-BASIC-BASE",
      "PASS-BASIC-BEPP",
      "NONFIN-GERUND-SUBJECT",
      "CLAUSE-ADV-SUCHTHAT",
      "COMP-SUPER-MOST",
      "COMP-SUPER-ONEOFTHE",
      "AGR-SV-ONEOFTHE",
      "POS-PRON-OTHER-ANOTHER",
      "POS-PRON-ONEONES"
    ],
    "subTagIds": [],
    "contrastTagIds": [
      "CT-ACTIVE-PASSIVE"
    ],
    "transformableRuleIds": [
      "TR-PASS-BASIC-ACTIVEPASSIVE"
    ],
    "candidateTagIds": [
      "CLAUSE-NOUN-THAT",
      "REL-REDUCED-ING",
      "REL-REDUCED-PP",
      "AGR-PARALLEL-PHRASE",
      "POS-ARTICLE-AAN",
      "POS-ARTICLE-THE"
    ],
    "examPoints": [
      "비교 표현의 형태와 비교 대상 병렬 확인",
      "주어의 핵심 명사와 동사의 수 일치 확인"
    ],
    "traps": [],
    "difficulty": "초고난도",
    "risk": 5,
    "reviewStatus": "draft",
    "source": "heuristic-v0.1"
  }
};
