/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'abu-1': '#F8F9FA',
        'abu-2': '#DDE2E5',
        'abu-3': '#ACB5BD',
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  variants: {
    gridColumn: ['responsive', 'hover'],
    gridColumnStart: ['responsive', 'hover'],
    gridColumnEnd: ['responsive', 'hover'],
  },
  safelist: [
    {
      pattern: /col-span-.*/,
      variants: ['lg', 'sm', 'md', 'lg', 'xl'],
    },
  ],
  plugins: [],
}

