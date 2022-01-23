module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          font: "#464646",
        },
        pink: {
          brand: "#C6007E",
        },
        blue: {
          pale: "#f0f6f9",
        },
      },
      fontFamily: {
        libre: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
