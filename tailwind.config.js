/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'bg-color': 'var(--bg-color)',
      'font-main-color': 'var(--font-main-color)',
      'font-additional-color': 'var(--font-additional-color)',
      'font-always-dark-color': 'var(--font-always-dark-color)',
      'gray-light': 'var(--gray-light)',
      'gray-normal': 'var(--gray-normal)',
      'gray-dark': 'var(--gray-dark)',
      'green-light': 'var(--green-light)',
      'green-normal': 'var(--green-normal)',
      'green-dark': 'var(--green-dark)',
      'green-darker': 'var(--green-darker)',
      'green-hover': 'var(--green-hover)',
      'custom-orange': 'var(--custom-orange)',
      'custom-blue': 'var(--custom-blue)',
      'custom-red': 'var(--custom-red)',
      'pine-green': 'var(--pine-green)',
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
    // TODO poprawić animację ping
    extend: {
      animation: {
        ping: 'ping 1.5s linear infinite'
      },
      keyframes: {
        ping:{
          '0%, 10%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '10%': {
            transform: 'scale(1.2)',
            opacity: '0.9'
          },
          '20%': {
            transform: 'scale(1.4)',
            opacity: '0.8'
          },
          '30%': {
            transform: 'scale(1.6)',
            opacity: '0.7'
          },
          '40%': {
            transform: 'scale(1.8)',
            opacity: '0.6'
          },
          '50%': {
            transform: 'scale(1.9)',
            opacity: '0.5'
          },
          '60%': {
            transform: 'scale(2)',
            opacity: '0.4'
          },
          '70%': {
            transform: 'scale(2.1)',
            opacity: '0.3'
          },
          '80%': {
            transform: 'scale(2.2)',
            opacity: '0.2',
          },
          "85": {
            transform: 'scale(2.3)',
            opacity: '0.1',
          },
          '90%': {
            transform: 'scale(2.4)',
            opacity: '0',
          },
          "100%": {
            transform: 'scale(2.5)',
            opacity: '0',
          }
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

