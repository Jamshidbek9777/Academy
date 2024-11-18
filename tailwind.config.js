import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gradientStart: "#E9E5FA",
        gradientMiddle: "#D4F7F3",
        gradientEnd: "#E9E5FB",
      },
      backgroundImage: {
        heroBg: "url('/imgs/heroBg.webp')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
