/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primery-orenge": "#EC4B4D",
        "primery-beige": "#F5ECE0",
        "dark-blue": "#2C3E50",
        "primery-blue": "#F1F1EE",
      },

      fontFamily: {
        "sofia-sans": ["Sofia Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
