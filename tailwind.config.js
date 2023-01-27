/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': '#FFFF00',
        'secondary': '#A020F0',
        'theme-body': '#000000',
        'theme-text': '#737373',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'shadow': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      lignHeight:{
        'leading': '20px'
      }
    },
  },
  plugins: [],
}
