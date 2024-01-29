/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["poppins", "sans-serif"],
        corith: ["Corinthia", "cursive"],
      },
    },
  },
  plugins: [],
};
