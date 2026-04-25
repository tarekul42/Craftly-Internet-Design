import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Monochrome Palette
        black: "#000000",
        white: "#FFFFFF",
        brandGray: {
          light: "#F5F5F5",
          dark: "#1A1A1A",
        }
      },
      fontFamily: {
        brand: ["var(--font-pacifico)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"], 
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
