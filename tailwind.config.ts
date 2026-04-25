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
        black: "#000000",
        white: "#FFFFFF",
        brandGray: {
          50: "#FCFCFC",
          100: "#F9F9F9",
          light: "#F5F5F5",
          900: "#111111",
          950: "#0a0a0a",
          975: "#050505",
          dark: "#1A1A1A",
        }
      },
      fontFamily: {
        brand: ["var(--font-pacifico)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"], 
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        'elegant': '0 4px 12px rgba(0,0,0,0.08)',
        'elegant-dark': '0 4px 12px rgba(255,255,255,0.08)',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.elegant-shadow': {
          'box-shadow': '0 4px 12px rgba(0,0,0,0.08)',
        },
        '.elegant-shadow-dark': {
          'box-shadow': '0 4px 12px rgba(255,255,255,0.08)',
        },
      });
    }),
  ],
};
export default config;
