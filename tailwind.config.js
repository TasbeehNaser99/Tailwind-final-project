/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        '2md': '960px'
      },
      colors: {
        primary: "#ff4a17",
      },
    },
  },
  plugins: [],
}
