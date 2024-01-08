/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#f0f0f0",
        mainRed: "#be3144",
        mainBlue: "#45567d",
        mainGray: "#303841",
        bgColor1: "#3a3d40",
        bgColor2: "#181719",
        hoverColor: "#ff7f50"
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        h1Font: ['Raleway', 'sans-serif']
      },
      height: {
        calc: 'calc(100% - 6.8rem)',
      },
      animation: {
        html: 'html 3s',
        javascript: 'javascript 3s',
        python: 'python 3s',
        other: 'other 3s'
      },
      keyframes: {
        html: {
          '0%': { width: '0%' },
          '100%': { width: '95%' }
        },
        javascript: {
          '0%': { width: '0%' },
          '100%': { width: '88%' }
        },
        python: {
          '0%': { width: '0%' },
          '100%': { width: '70%' }
        },
        other: {
          '0%': { width: '0%' },
          '100%': { width: '78%' }
        }
      }
    },
  },
  plugins: [],
}