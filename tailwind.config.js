/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Rajdhani"],
        body: ["Inter"],
      },
      colors: {
        heading: "#DDE3F0",
        body: "#ABB1CC",
      },
    },
  },
  plugins: [],
};
