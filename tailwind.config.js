/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mbl': '320px',
      'sml':'565px',
      'pcs': '814px',

    },
    extend: {
      colors: {
        'dark-blue': '#02020b ',
        'light-blue': '#0c0f50 ',
        'dark-orange': '#f45e00',
        'white-orange1': '#F6A46D',
        'white-orange':'#f6935180',
        'smoke': '#F5F5F5 ',
        'smoke-b': '#F5F5F57a ',
        'smoke-a': '#f5f5f51a',
        'danger-red': '#B70404'
      },
      dropShadow: {
        '2xl': '0 10px 10px rgba(244, 94, 0, 0.4)',
        '3xl': '0 35px 35px rgba(244, 94, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(244, 94, 0, 0.15)',
            '0 45px 65px rgba(244, 94, 0, 0.25)'
        ]
      }
    },
  },
  plugins: [require("daisyui")],
};
