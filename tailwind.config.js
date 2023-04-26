/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,html,ts,jsx,tsx}",
  ],
  colors: {
    'pink': '#FFACAC',
  },
  theme: {
    extend: {
      fontFamily:{
        poppins :'poppins',
      },
    },
  },
  plugins: [],
}
