/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      bgBlack: "#000000",
      white: "#FFFFFF",
      orange: "#D9623F",
      grey: "#808080",
      "#605F5D": "#605F5D",
      "#4FB1AC": "#4FB1AC",
      "#AAA7A7": "#AAA7A7",
      "#4C6028": "#4C6028",
      "#19617A": "#19617A",
      "#5C5277": "#5C5277",
      "#7C375B": "#7C375B",
      "#919BAB": "#919BAB",
      "#D3918D": "#D3918D",
      "#D7CBAF": "#D7CBAF",
      "#A5C4C5": "#A5C4C5",
    },

    fontFamily: {
      Ermitial: ["Ermitial", "Medium"],
      AvenirBlack: ["Avenir", "Black"],
      AvenirBook: ["Avenir", "Book"],
      AvenirHeavy: ["Avenir", "Heavy"],
      AvenirMedium: ["Avenir", "Medium"],
      AvenirLight: ["Avenir", "Light"],
      AvenirRegular: ["Avenir", "Regular"],
    },

    variants: {
      extend: {
        opacity: ["group-hover"],
      },
    },

    extend: {},
  },
  plugins: [],
};
