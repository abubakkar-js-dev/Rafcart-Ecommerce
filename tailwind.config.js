module.exports = {
  content: [
    "./src/**/*.{html,css,js}",
  ],
  theme: {
    container : {
      center: true,
      padding:{
          DFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
         '2xl': '6rem'
      },
    },
    extend: {
      aspectRatio:{
        '4/3' : '4 / 3',
      },
    },
  },
  plugins: [],
}
