/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
        },
        bone: 'rgb(var(--bone) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        stone: {
          400: 'rgb(var(--stone-400) / <alpha-value>)',
          500: 'rgb(var(--stone-500) / <alpha-value>)',
          600: 'rgb(var(--stone-600) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          light: 'rgb(var(--accent-light) / <alpha-value>)',
        },
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.15) translateY(-2%)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};
