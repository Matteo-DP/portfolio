/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "shine": "shine 1s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}