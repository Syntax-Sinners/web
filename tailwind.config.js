/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          500: '#FF6129',
          600: '#FC3B00',
          400: '#FF7145',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(252, 59, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
