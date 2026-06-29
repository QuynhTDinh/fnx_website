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
        fnx: {
          dark: '#0C1927',
          matrix: '#080F12',
          gold: {
            dark: '#A36426',
            light: '#D3A342',
          },
          sand: '#EEE5B3',
          silver: '#8F8F8F'
        },
        surface: {
          800: '#141414',
          900: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Orbitron', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
