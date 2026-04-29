import { loadUserData, saveUserData } from "./db.js";

export function exportUserData() {
  const data = loadUserData();
  const json = JSON.stringify(data, null, 2);

  const blob = new Blob([json], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `1001una-v2-backup-${date}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

export function importUserDataFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = event => {
      try {
        const importedData = JSON.parse(event.target.result);

        if (!importedData || typeof importedData !== "object") {
          throw new Error("올바른 백업 파일이 아닙니다.");
        }

        const saved = saveUserData(importedData);
        resolve(saved);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("파일을 읽지 못했습니다."));
    };

    reader.readAsText(file);
  });
}
