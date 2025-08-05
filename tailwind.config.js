/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Agregar la carpeta app específicamente
  ],
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1DB954",
      },
      fontFamily: {
        spotimy: ["Circular", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
