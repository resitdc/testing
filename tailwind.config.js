/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#19f8ff',
      spotify: '#1ED760',
      facebook: '#1877F2',
      "black-1": "#111",
      "white-1": '#FFFFFF',
      'gray-1': '#d9dadc',
      'gray-2': '#878787',
      'gray-3': '#737373',
      "gray-4": "#444",
    },
    fontFamily: {
      sans: ['GothamBold', 'sans-serif'], // Default
      thin: ['Gotham-Thin', 'sans-serif'],
      extraLight: ['Gotham-XLight', 'sans-serif'],
      light: ['Gotham-XLight', 'sans-serif'],
      normal: ['GothamBold', 'sans-serif'],
      medium: ['GothamMedium', 'sans-serif'],
      semiBold: ['GothamBlack', 'sans-serif'],
      bold: ['GothamBold', 'sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

