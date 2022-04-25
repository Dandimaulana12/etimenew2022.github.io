module.exports = {
  content: ['index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        'body2': ['body2']
      },
      animation:{
      'goyang' : 'goyang 1s ease-in-out infinite',
      'spin'   : 'spin 4s linear infinite',
      },
      keyframes:{
        goyang :{
          '0%, 100%': { transform: 'rotate(-3deg)'}, 
          '50%' : {transform:'rotate(3deg)'},
        }
      }
    },
    screens: {
      // => @media (min-width: 1024px) { ... }
      'sm': {'min': '640px', 'max': '890px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': {'min': '891px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': {'min': '1024px', 'max': '1536px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
  },
  plugins: [],
}
}
