/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c2541',
        'primary-dark': '#0b132b',
        'primary-light': '#3a506b'
      }
    },
  },
  plugins: [],
}
