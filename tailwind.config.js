// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set the Inter font (used with next/font) as the default sans-serif font
        sans: ['var(--font-inter)', 'sans-serif'],
      },
colors: {
  primary: '#A0BCA0',   // Verde Salvia Suave
  secondary: '#D4E2D4', // Verde Menta Pálido
  accent: '#F0E68C',    // Caqui Claro / Amarillo Arenoso
  highlight: '#8FBC8F', // Verde Mar Oscuro Medio / Verde Esmeralda Apagado (Alternativa más pop: #A9F3B6 - Verde Menta Brillante)
  dark: '#3B5249',      // Verde Bosque Oscuro
},
    },
  },
  plugins: [],
}