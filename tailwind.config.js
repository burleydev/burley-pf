/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlack': '#201f2d',
        'myGrey': '#4b4b52'
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
