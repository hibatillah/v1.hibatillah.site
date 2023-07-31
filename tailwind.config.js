/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        lg: "4.5rem",
      },
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        source3: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        main: {
          100: "#ebebeb",
          200: "#dcdcdc",
          300: "#bfbfbf",
          400: "#7C7B84",
          500: "#2e2e32",
          600: "#28282c",
          700: "#1f1f1f",
          800: "#1c1c1f",
          900: "#161618",
        },
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
