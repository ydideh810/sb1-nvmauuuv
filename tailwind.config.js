/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tektur: ['Tektur', 'sans-serif'],
        zendots: ['Zen Dots', 'cursive'],
      },
      colors: {
        navy: {
          800: '#0a0d14',
          900: '#070a0f',
          950: '#040507',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'crt-glow': 'crt-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'crt-glow': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(239, 68, 68, 0.7)',
            filter: 'brightness(1)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(239, 68, 68, 0.9), 0 0 30px rgba(239, 68, 68, 0.7)',
            filter: 'brightness(1.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
