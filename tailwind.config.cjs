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
      cyan: '#66D2CF',
      darkCyan: '#0E8784',
      darkBlue: '#2C343E',
      darkGreyBlue: '#333D4B',
      paleOrange: '#FDD6BA',
      lightCream: '#FEFCF7',
      grey: '#83888F',
    },
    fontFamily: {
      serif: ['Fraunces-Black', 'serif'],
      sans: ['Barlow-Regular', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/src/assets/images/home/mobile/image-hero-coffeepress.jpg')",
        'hero-tablet': "url('/src/assets/images/home/tablet/image-hero-coffeepress.jpg')",
        'hero-desktop': "url('/src/assets/images/home/desktop/image-hero-coffeepress.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
