/** @type {import('tailwindcss').Config} */ // 이건 Tailwind CSS의 설정 파일이야

export default {
    content: [
        "./index.html",// 이건 프로젝트의 루트 파일이야. HTML 파일에서 Tailwind CSS를 사용할 수 있도록 함
        "./src/**/*.{js, ts, jsx, tsx}",// src 폴더 안의 모든 js,ts,jsx,tsx 파일에서 tailwind css 클래스를 사용할 수 있도록 함
    ],
    theme: {
        extend: {}, // 이건 기본 테마를 확장하는 옵션. Tailwind 테마를 추가적인 테마를 확장할 때 사용
    },
    plugins: [], // 이건 Tailwind css 플러그인을 추가 할 수 있음. ex.애니메이션 등
}