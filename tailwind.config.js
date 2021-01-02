module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
