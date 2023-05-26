/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light':  '#EDF9FC',
      'white': '#FFFFFF',
      'dark':  '#020B0D',
      'black': '#333333',
      'primary': {
        light: '#2BB7DA',
        DEFAULT: '#219EBC',
        dark: '#1F91AD',
      },
      'secondary': {
        light: '#FF8E0D',
        DEFAULT: '#FB8500',
        dark: '#E87C00',
      },
      'accent': {
        DEFAULT: '#8ECAE6',
      }
    },
    extend: {},
  },
  plugins: [],
}
