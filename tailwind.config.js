/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px', 
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/img/bg-home.png')",
        'about-bg': "url('/public/img/about-bg.png')",
        'service-bg': "url('/public/img/service-bg.png')",
      },

      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        outfit: "'Outfit', 'sans-serif'",
        RubikOne: "'RubikOne', 'sans-serif'",
        Manrope: "'Manrope', 'sans-serif'",
        quicksand: "'Quicksand', 'sans-serif'"
      },

      colors: {
        baseBg: '#FFF5E7',
        main: '#ECBF1C',
        alternative: '#337150',
        second: '#5A8840',
        accent: '#AA9680',
        desc: '#17371E',
        dark: '#343535'
      },
    },
  },
  plugins: [],
}