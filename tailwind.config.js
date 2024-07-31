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
      }
    },
  },
  plugins: [],
}

