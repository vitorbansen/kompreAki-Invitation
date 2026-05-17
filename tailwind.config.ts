import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ninja: {
          black: "#0A0A0B",
          dark:  "#111113",
          card:  "#16161A",
          line:  "#26262C",
          red:   "#E11D2A",
          "red-bright": "#FF2D3D",
          "red-deep":   "#8B0A14",
        },
        wa: {
          green:   "#25D366",
          "green-dark":   "#128C7E",
          "green-darker": "#075E54",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":   "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ember-up":  "ember-up linear infinite",
        "pulse-slow":"pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "ember-up": {
          "0%":   { transform: "translateY(0) scale(1)",   opacity: "0" },
          "20%":  { opacity: "1" },
          "100%": { transform: "translateY(-100vh) scale(0.3)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
