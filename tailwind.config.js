module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tm-black': '#28475C',
        'tm-gray': '#edeef1',
        'tm-green': '#47beb9',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
