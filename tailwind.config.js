/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        turquoise: {
          100: '#F0FEFF',
          200: '#CFFDFF',
          300: '#A2E7EB',
          400: '#5FC9CF',
          500: '#0099A1',
          600: '#1B7A80',
          700: '#005E63',
          800: '#004B4F',
          900: '#003336',
        },
        sunset: {
          100: '#FAF0F0',
          200: '#FFDDDB',
          300: '#FFB1AD',
          400: '#FF948F',
          500: '#FF6158',
          600: '#D6524B',
          700: '#80312D',
          800: '#401816',
          900: '#331311',
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
