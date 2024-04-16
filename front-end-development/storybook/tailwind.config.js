import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue
      }
    },
  },
  plugins: [],
}

