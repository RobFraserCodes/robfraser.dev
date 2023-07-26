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
      'light':  '#D8D8D8',
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
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
