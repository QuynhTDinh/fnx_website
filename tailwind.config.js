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
          dark: '#111111',
          surface: '#1A1A1A',
          border: '#2B2B2B',
          light: '#F5F5F5',
          navy: '#153C8A',
          gold: {
            dark: '#A36426',
            light: '#C89A3D',
          },
          matrix: '#080F12',
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
        heading: ['Manrope', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        tech: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
