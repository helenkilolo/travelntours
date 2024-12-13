/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Include all EJS files
    "./public/js/**/*.js", // Include any custom JS files
    "./src/**/*.{js,ts,jsx,tsx}", // For JavaScript/TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        themeGreen: {
          DEFAULT: '#0C5549', // Original color
          light: '#14695C',   // Lighter shade
        },
        themeYellow: "#ffca28", // Accent color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font
        nunito: ['Nunito', 'sans-serif'], // Add Nunito font
      },
    },
  },
  plugins: [],
};
