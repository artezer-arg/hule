/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F2E8',
          light: '#FFFDF8',
        },
        yellowPastel: '#F5F0B8',
        softPink: '#DA90AE',
        hotPink: '#CB4178',
        peach: '#E8A27F',
        pinkBeige: '#E9CBB4',
        plum: '#945B72',
        darkBordeaux: '#4B2032',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'float-balloon-1': 'float-balloon-1 8s ease-in-out infinite',
        'float-balloon-2': 'float-balloon-2 10s ease-in-out infinite',
        'float-balloon-3': 'float-balloon-3 9s ease-in-out infinite',
        'float-balloon-4': 'float-balloon-4 11s ease-in-out infinite',
        'float-balloon-5': 'float-balloon-5 7s ease-in-out infinite',
        'float-balloon-6': 'float-balloon-6 12s ease-in-out infinite',
        'float-balloon-7': 'float-balloon-7 9.5s ease-in-out infinite',
        'float-slow': 'float-slow 25s ease-in-out infinite',
        'float-medium': 'float-medium 18s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        'float-balloon-1': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'float-balloon-2': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-1.5deg)' },
        },
        'float-balloon-3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'float-balloon-4': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        'float-balloon-5': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        'float-balloon-6': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-2deg)' },
        },
        'float-balloon-7': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-11px) rotate(1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -30px) rotate(3deg)' },
          '66%': { transform: 'translate(-15px, 20px) rotate(-2deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(-25px, -15px) rotate(-4deg)' },
        },
      },
    },
  },
  plugins: [],
}
