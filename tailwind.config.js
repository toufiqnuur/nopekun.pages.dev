const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            lg: "720px",
            xl: "960px"
         }
      },
      extend: {
         fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
         },
      },
   },
   variants: {
      extend: {},
   },
      plugins: [],
   }
