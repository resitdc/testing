/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#19f8ff",
      "red-1": "#d71e1e",
      "black-1": "#111",
      "white-1": "#FFFFFF",
      "gray-1": "#eeeeee",
      "gray-2": "#d9dadc",
      "gray-3": "#878787",
      "gray-4": "#737373",
      "gray-5": "#444",
    },
    fontFamily: {
      sans: ["GothamBold", "sans-serif"], // Default
      thin: ["Gotham-Thin", "sans-serif"],
      extraLight: ["Gotham-XLight", "sans-serif"],
      light: ["Gotham-XLight", "sans-serif"],
      normal: ["GothamBold", "sans-serif"],
      medium: ["GothamMedium", "sans-serif"],
      semiBold: ["GothamBlack", "sans-serif"],
      bold: ["GothamBold", "sans-serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
