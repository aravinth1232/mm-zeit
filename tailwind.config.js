/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        300: '300px',
      },
      fontFamily: {
        karla: ['Karla', 'serif'],
        inconsolata: [ 'Inconsolata', 'monospace'],
      },
      colors:{
        primary : '#342e37',
        secondary : '#fcfbb4',
        tertiary : '#f3f9d2',
        fourth : "#f7fff7",

      }        
    },
  },
  plugins: [



  ],
}

