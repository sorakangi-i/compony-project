import { defineConfig } from 'vite'
import { fileURLToPath } from 'url' // URL을 파일 경로로 변환하는 모듈
import reactSWC from '@vitejs/plugin-react-swc' // 리액트를 빠르게 번역하는 플러그인
import path from 'path' // 경로 관리를 위한 Node.js 모듈

const __filename = fileURLToPath(import.meta.url) // 현재 파일의 경로를 가져옴
const __dirname = path.dirname(__filename) // 현재 파일의 디렉토리 경로를 가져옴

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactSWC()],
  resolve: { // Vite의 파일 찾는 규칙을 설정
    alias: {
      '@' : path.resolve(__dirname, './src'), //경로 별칭 '@'는 src 폴더를 가르킴
      '~assets' : path.resolve(__dirname, './src/assets') // '~assets'는 'src/assets' 폴더를 가르킴
    },
  },
  server: {
    port: 5000, // 서버 실행시 포트 번호. 팀 표준 port로 5000번 사용하는 것을 권장
    open: true, // 서버 실행시 브라우저 자동 실행. 기본값은 false
    host: '0.0.0.0', // 서버 실행시 호스트 주소. 기본값은 localhost. 0.0.0.0은 모든 네트워크 인터페이스에서 접근 가능하게 설정~
    proxy: { // (통역사 역할) 프록시 주소는 서버와의 통신을 위한 주소
      '/api' : { // '/api'로 주소 요청이 들어오면 서버로 전송
        target: 'http://localhost:8000', // 이 프로젝트의 프록시 서버 주소
        changeOrigin: true, // 프록시 서버의 주소를 변경하여 서버와 통신
        // rewrite: (path) => path.replace(/^\/api/, '') // 프록시는 주소가 변경되었으니 주소를 변경
      },
    }
  },
})
