/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1024px', // Adjust screen sizes as needed
      },
    },
  },
  plugins: [],
}



