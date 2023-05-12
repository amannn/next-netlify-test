/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "uk-flag": "url('/icons/uk.png')",
        "ita-flag": "url('/icons/ita.png')",
      },
      colors: {
        primary: "#F7941D",
        accent: "#36F7CE",
        black: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
