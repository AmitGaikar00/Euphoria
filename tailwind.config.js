/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#8434E1",
          navy: "#345EFF",
          yellow: "#FDC761",
        },

        dark: {
          light: "#F6F6F6",
          hard: "#3C4242",
          soft: "#807D7E",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        poppins: ["'poppins'", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
