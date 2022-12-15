/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'pt': ['PT Serif', 'serif'],
    },
    extend: {
      fontWeight: {
      'fw-600': '600',
      },
      fontSize: {
      'xxs': '0.625rem',
      },
      padding: {
        '71px': '4.4375rem',
      },
      gridTemplateRows: {
        'layout': 'repeat(3, 2rem auto)',
      }
    }
  },
  plugins: [],
}
