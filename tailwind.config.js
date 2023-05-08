/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      stone: {
        100: '#e6e5ea',
        300: '#8b8998',
        400: '#807d8d',
        500: '#55545c',
        800: '#24232b',
        900: '#18171f',
      },
      gradient: {
        100: '#14131b',
        900: '#08070c',
      },
      green: {
        500: '#a4ffaf',
        700: '#001502',
      },
      yellow: '#f6cd6a',
      red: '#fb7a56',
    },
  },
  plugins: [],
};
