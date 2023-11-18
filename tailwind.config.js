/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {},
    },
    colors: {
      "orange-bg": "#FFA000",
      "icon-color": "#522F2F",
      "pink-btn": "#E1505B",
      "blue-btn": "#006E80",
      "text-color": "#F1EACD",
      "off-white": "#DEDDC2",
      "name-color": "#BB3E18",
      "teal-footer": "#01A2A2",
      "footer-text": "#F0ECD7"
    },
  },
  plugins: [],
};
