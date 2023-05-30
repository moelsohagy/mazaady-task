/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#131A55',
          50: '#F5F6FF',
          100: '#DFE2FF',
          200: '#C8CEFF',
          300: '#B2BAFF',
          400: '#9CA6FF',
          500: '#7681DD',
          600: '#5560BB',
          700: '#3A4499',
          800: '#15207D',
          900: '#131A55',
        },
        darkPrimary: '#080D39',
        secondary: '#FFCB12',
        body_bg: '#f2f2f2',
        text: {
          primary: '#272727',
          secondary: '#B7BAC8',
          opposite: '#FFFFFF',
        },
        error: {
          50: '#FEE6E7',
          100: '#FCB0B3',
          200: '#FA8A8E',
          300: '#F8545B',
          400: '#F7333B',
          500: '#F5000A',
          600: '#DF0009',
          700: '#AE0007',
          800: '#870006',
          900: '#670004',
        },
        success: {
          50: '#E6FEF2',
          100: '#B0FCD7',
          200: '#8AFAC4',
          300: '#54F8A9',
          400: '#33F798',
          500: '#00F57E',
          600: '#00DF73',
          700: '#00AE59',
          800: '#008745',
          900: '#006735',
        },
        warning: {
          50: '#FEF4E6',
          100: '#FCDCB0',
          200: '#FACB8A',
          300: '#F8B354',
          400: '#F7A433',
          500: '#F58D00',
          600: '#DF8000',
          700: '#AE6400',
          800: '#874E00',
          900: '#673B00',
        },
        orange: '#ff7612',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    // screens: {
    //   'sm': {'min': '640px', 'max': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '768px', 'max': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': {'min': '1536px'},
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [],
}
