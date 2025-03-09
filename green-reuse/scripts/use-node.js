// Node.js 버전을 설정하는 스크립트
const fs = require('fs');
const { execSync } = require('child_process');

try {
  // .nvmrc 파일 읽기
  const nodeVersion = fs.readFileSync('.nvmrc', 'utf8').trim();
  console.log(`Node.js 버전을 ${nodeVersion}로 설정합니다...`);

  // 운영체제 확인
  const isWindows = process.platform === 'win32';

  // 명령어 실행
  if (isWindows) {
    console.log(`명령어를 실행하세요: nvm use ${nodeVersion}`);
  } else {
    try {
      execSync(`nvm use ${nodeVersion}`, { stdio: 'inherit' });
    } catch (error) {
      console.log(`명령어를 실행하세요: nvm use ${nodeVersion}`);
    }
  }
} catch (error) {
  console.error('오류가 발생했습니다:', error.message);
}
