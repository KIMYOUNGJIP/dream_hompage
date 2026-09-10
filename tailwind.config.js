/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          yellow: '#FEF08A',
          orange: '#FDBA74',
          blue: '#93C5FD',
          sky: '#BAE6FD',
          indigo: '#A5B4FC',
          green: '#86EFAC',
          pink: '#F9A8D4',
          purple: '#D8B4FE',
          primary: '#4F46E5',
          secondary: '#F59E0B',
          bg: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [],
}
