/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["poppins", "sans-serif"],
        corith: ["Corinthia", "cursive"],
      },
      boxShadow: {
        custom: '2px 3px 2px 1px #EEEEFF',
      }  
    },
  },
  plugins: [],
};
