/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff7214",
        secondColor: "#162b45",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2.5rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      }
    },
  },
  plugins: [],
}

