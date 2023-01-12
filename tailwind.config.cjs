/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dm Sans", "san-serif"],
      },
      colors: {
        'primary': '#181B80',
        'secondary': '#001133'
      }
    },
  },
  plugins: [],
};
