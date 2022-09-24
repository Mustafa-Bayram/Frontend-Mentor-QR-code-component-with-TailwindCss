/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'375px',
      md:'768px',
      lg:'1024px',
      xl:'1440px'
    },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        LightGray: 'rgb(196, 213, 248)',
        GrayishBlue: 'hsl(220, 15%, 55%)',
        DarkBlue: 'hsl(218, 44%, 22%)',
        },
      fontFamily: {
        Outfit: 'Outfit',
      },
      fontSize: {
        '2.5xl': '1.375rem',
      },
      height: {
        '79': '79%',
        '85': '85%',
        '55': '55%',

      },
    },
  },
  plugins: [],
}
