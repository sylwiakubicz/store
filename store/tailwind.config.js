/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "bg-color": {
        light: "#fff",
        dark: "#1E313B"
      },
      "font-main-color": {
        light: "#000",
        dark: "#E2E8F0"
      },
      "font-additional-color": {
        light: "#fff",
        dark: "#E2E8F0",
      },
      "gray-light": {
        light: "#F1F1F1",
        dark: "#958b8b"
      },
      "gray-normal": {
        light: "#777777",
        dark: "#d5cfcf"
      },
      "gray-dark": {
        light: "#222222",
        dark: "#E2E8F0"
      },
      "green-light": "#A1C152",
      "green-normal": "#94B447",
      "green-dark": "#83A13B",
      "green-darker": "#698929",
      "orange": "#EE643A",
      "blue": "#345EA8",
      "red": "#DF341D",
      "pine-green": "#2B9888"
    },
    fontFamily: {
      'main-font': ["Gill Sans",'sans-serif']
    },
    screens: {
      'xs': "420px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px"
    },
    extend: {},
  },
  plugins: [],
}

