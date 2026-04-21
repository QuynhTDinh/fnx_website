export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        surface: {
          800: '#141414',
          900: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
