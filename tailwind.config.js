/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif']
      }, 
      minWidth: {
        '500': '500px'
      },
      width: {
        '500': '500px',
        '300': '300px',
        '250': '250px',
        '200': '200px'
      }
    },
  },
  plugins: [],
}

