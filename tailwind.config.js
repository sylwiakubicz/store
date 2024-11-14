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
    extend: {
      animation: {
        ping: 'ping 1.8s linear infinite'
      },
      keyframes: {
        ping:{
          from: {
            transform: 'scale(.1, .1)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          to: {
            transform: 'scale(1.2, 1.2)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

