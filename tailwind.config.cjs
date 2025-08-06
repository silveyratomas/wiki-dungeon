/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  safelist: ['tarjetaNivel'],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['minecraft', 'sans-serif'],
      },
      colors: {
        black: '#0c0c0c',
        neon: '#00ff99',
        gray: {
          DEFAULT: '#1f1f1f',
          light: '#2a2a2a',
        },
        white: '#ffffff',
      },
      animation: {
        sparkle: 'sparkle 3s infinite ease-in-out',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
