import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f4",
          100: "#d6ebdf",
          200: "#a8d5b8",
          300: "#6bbf8a",
          400: "#3d9d62",
          500: "#237d4b",
          600: "#1a633b",
          700: "#144f30",
          800: "#0f3c25",
          900: "#0a2b1a",
        },
        gold: {
          50: "#fdf8ee",
          100: "#f9edcf",
          200: "#f2d89e",
          300: "#e9c06d",
          400: "#dfa640",
          500: "#d6922a",
          600: "#b87420",
          700: "#9a5a1a",
          800: "#7c4616",
          900: "#613712",
        },
        cream: {
          50: "#FFFDF7",
          100: "#FDF6E3",
          200: "#F5ECD7",
          300: "#EBE0C4",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;