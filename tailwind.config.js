/** @type {import('tailwindcss').Config} */
module.exports = {
  node: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
