/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "hsl(47, 88%, 63%)",
      },
      fontFamily: {
        figtree: "Figtree",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
