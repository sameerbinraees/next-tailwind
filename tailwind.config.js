/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   // Configure your color palette here
    //   nav: '#440464',
    //   footer: '#DD7A1E',
    // },
    screens: {
      navWidth: '1100px',
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Mulish: ['Mulish'],
      },
    },
  },
  plugins: [],
};
