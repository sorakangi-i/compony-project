import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 필요한 디렉토리 생성
const dirs = ["src/components", "src/pages", "src/layouts", "src/assets"];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ ${dir} 디렉토리가 생성되었습니다.`);
  }
});

// .env 파일 확인
if (!fs.existsSync(".env") && fs.existsSync(".env.example")) {
  fs.copyFileSync(".env.example", ".env");
  console.log("✅ .env 파일이 생성되었습니다.");
}

console.log("🎉 로컬 개발 환경 설정이 완료되었습니다!");