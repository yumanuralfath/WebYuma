/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16 px'
    },
    extend: {
      colors: {
        primary: '#F8EDE3',
        secondary: '#BDD2B6',
        third: '#A2B29F',
        backgroundColor: '#798777',
      },
      screen: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
};
