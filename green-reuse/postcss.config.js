// 이 파일은 tailwind css를 사용하기 위한 설정 파일이다.
// postcss 플러그인은 Tailwind css를 사용하기 위한 플러그인이다.
// Vite가 프로젝트를 빌드할 때 postcss 플러그인을 사용하여 Tailwind css를 사용할 수 있게 한다.
// Vite를 사용하면, postcss.config.js 파일이 필요하다.
export default {
    plugins: { // postcss 설정 파일에서 사용할 플러그인을 설정
        tailwindcss: {}, // Tailwind css를 위한 플러그인
        autoprefixer: {}, // 브라우저 버전에 따라 접두사를 자동으로 추가하는 플러그인(브라우저 호환성용)
    },
}