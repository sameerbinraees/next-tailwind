/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // Configure your color palette here
      nav: '#440464',
      footer: '#DD7A1E',
    },
    extend: {
      fontFamily: {
        Mulish: ['Mulish'],
      },
    },
  },
  plugins: [],
};
