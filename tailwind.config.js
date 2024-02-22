/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Process all JavaScript and TypeScript files in the src directory
    './public/index.html',        // Process the HTML file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
