module.exports = {
  content: [
    "./src/**/*.{html,css,js}",
  ],
  theme: {
    screen: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',

    },
    container : {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        roboto: "'Roboto', 'sans-serif'",

      },
      colors: {
        'primary' : '#FD3D57',
      }
    },
  },
  variants: {
    // display: ['group-hover']
  },
  plugins: [],
}
