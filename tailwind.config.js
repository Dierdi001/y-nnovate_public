/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        manrope: ["Manrope", "sans-serif"]
      },
      animation: {
        'skew-scroll': 'skew-scroll 50s linear infinite',
      },
      keyframes: {
        'skew-scroll': {
          '0%': {
            transform:
              'rotatex(10deg) rotateZ(-10deg) skewX(10deg) translateZ(0) translateY(0)',
          },
          '100%': {
            transform:
              'rotatex(10deg) rotateZ(-10deg) skewX(10deg) translateZ(0) translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}


