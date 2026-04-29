export const DIAGNOSIS_OPTIONS = {
  correct: [
    { id: "HIGH_CONF", label: "확신했다" },
    { id: "MID_CONF", label: "어느 정도 알았다" },
    { id: "GUESSED", label: "찍었다" }
  ],

  wrong: [
    { id: "CONCEPT", label: "개념 부족" },
    { id: "STRUCTURE", label: "구조가 안 보임" },
    { id: "GUESSED", label: "찍음" },
    { id: "MISTAKE", label: "실수" },
    { id: "OTHER", label: "기타" }
  ]
};
