/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21324a",
        secondary: "#9c643e",
        tertiary: "#0afac8",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
};

// primary: "#0A192F",
// secondary: "#F97316",
// tertiary: "#54D6BB",