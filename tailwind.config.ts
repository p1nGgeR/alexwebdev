import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {},
      animation: {},
    },
    colors: {
      accent: colors.yellow[300],
      primary: colors.slate[100],
      secondary: colors.slate[400],
      success: colors.emerald[600],
      warning: colors.yellow[500],
      lightdark: colors.slate[800],
      dark: colors.slate[900],
      darkest: colors.slate[950],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
