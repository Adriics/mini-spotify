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
        "spotimy-green-light": "#4ade80",
        "spotimy-green": "#22c55e",
        "spotimy-green-medium": "#16a34a",
        "spotimy-white": "#FFF",
        "spotimy-gray-light": "#f3f4f6",
        "spotimy-gray-medium": "#d1d5db",
        "spotimy-gray-dark": "#292524",
      },
      fontFamily: {
        spotimy: ["Circular", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundColor: {
        "spotimy-black": "#000",
        "spotimy-gray-medium": "#44403c ",
        "spotimy-gray-dark": "#292524",
        "spotimy-green-light": "#34d399",
        "spotimy-green-medium": "#16a34a",
      },
    },
  },
  plugins: [],
};
