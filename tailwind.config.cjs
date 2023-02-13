/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      darkCyan: '#0E8784',
      darkGreyBlue: '#333D4B',
      paleOrange: '#FDD6BA',
      lightCream: '#FEFCF7',
      grey: '#83888F',
    },
    fontFamily: {
      serif: ['Fraunces-Black', 'serif'],
      sans: ['Barlow', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
