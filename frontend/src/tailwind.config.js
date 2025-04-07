/*


Check video at 47 minutes

======================================
*/



/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'primary':'#FFCE1A',
          'secondary':'#0D0842',
          'blackBG':'F3F3F3',
          'Favorite':'#FF5841',
        },
        fontFamily:{
          "primary": ["Montserrat", "sans-serif"],
          "secondary": ["Nunito Sans", "sans-serif"]
        }
      },
    },
    plugins: [],
  }