/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        work: "#ff8c66",
        play: "#56c2e6",
        study: "#ff5c7c",
        exercise: "#4acf81",
        social: "#7536d3",
        selfCare: "#f1c65b",
      },
    },
  },
  plugins: [],
};
