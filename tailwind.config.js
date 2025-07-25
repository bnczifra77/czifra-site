/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scan JS, JSX, TS, and TSX files for classes
  theme: {
    extend: {
      colors: {
        'consulting-blue': '#1e40af',
      },
    },
  },
  plugins: [],
}