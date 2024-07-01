/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ["IBM Plex Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

