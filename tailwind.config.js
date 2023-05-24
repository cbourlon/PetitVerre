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
