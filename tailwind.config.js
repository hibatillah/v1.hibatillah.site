/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    body: (theme) => ({
      backgroundColor: theme("colors.main.950"),
    }),
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        lg: "4.5rem",
        "2xl": "9rem",
      },
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        source3: ["Source Sans 3", ...defaultTheme.fontFamily.sans],
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
          950: "#0F0F0F",
        },
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
