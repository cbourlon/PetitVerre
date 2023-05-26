/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
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
      nigredo: "#605F5D",
      theoremeColor: "#4FB1AC",
      blackhopeColor: "#AAA7A7",
      christmasColor: "#4C6028",
      lanterneColor: "#19617A",
      noireColor: "#5C5277",
      californicationColor: "#7C375B",
      bruxellesColor: "#919BAB",
      sourkrumpColor: "#D3918D",
      jurassicColor: "#D7CBAF",
      hopziColor: "#A5C4C5",
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
