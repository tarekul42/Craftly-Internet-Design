import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
          50: "#FCFCFC",    // card headers, button backgrounds
          100: "#F9F9F9",   // page backgrounds (light mode)
          light: "#F5F5F5", // modal headers
          900: "#111111",   // hover/secondary sections (dark mode)
          950: "#0a0a0a",   // card headers (dark mode)
          975: "#050505",   // page backgrounds (dark mode)
          dark: "#1A1A1A",  // modal headers (dark mode)
        }
      },
      fontFamily: {
        brand: ["var(--font-pacifico)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"], 
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.brutal-shadow': {
          'box-shadow': '4px 4px 0 0 #000',
        },
        '.brutal-shadow-dark': {
          'box-shadow': '4px 4px 0 0 #fff',
        },
      });
    }),
  ],
};
export default config;
