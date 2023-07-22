

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: '#ffffff',
        blueLight: '#F4F9FF',
        rectangle: '#FFF5DB'
      },
      textColor: {
        secondary: "#565656"
      },
      colors: {
        button: "#2639ED"
      }
    },
  },
  plugins: [],
}
