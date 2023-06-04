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
      'off-white': '#FAFAFA',
      'white': '#FFFFFF',
      'dark':  '#1B1F3B',
      'gray': '#838383',
      'black': '#13162A',
      'primary': {
        light: '#2BB7DA',
        DEFAULT: '#219EBC',
        dark: '#1F91AD',
      },
      'secondary': {
        light: '#B758EE',
        DEFAULT: '#B14AED',
        dark: '#A733EB',
      },
      'accent': {
        DEFAULT: '#8ECAE6',
      }
    },
    extend: {},
  },
  plugins: [],
}
