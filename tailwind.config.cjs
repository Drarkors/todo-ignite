/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",

      black: "#000000",
      white: "#FFFFFF",

      purple: {
        700: "#5E60CE",
        500: "#8284FA",
      },
      blue: {
        700: "#1E6F9F",
        500: "#4EA8DE",
      },
      gray: {
        700: "#0D0D0D",
        600: "#1A1A1A",
        500: "#262626",
        400: "#333333",
        300: "#808080",
        200: "#D9D9D9",
        100: "#F2F2F2",
      },
      danger: "#E25858",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      lineHeight: {
        snug: 1.4,
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
