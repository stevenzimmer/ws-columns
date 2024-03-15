/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        w: {
          header: '#265CFF',
        },
      }
    },
  },
  plugins: [],
}

