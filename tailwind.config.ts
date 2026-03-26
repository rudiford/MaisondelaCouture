import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        "cream-warm": "#F5F0E8",
        gold: "#C9A96E",
        "gold-light": "#E8D5B0",
        "gold-dim": "rgba(201,169,110,0.15)",
        noir: "#0A0A0A",
        charcoal: "#1A1A1A",
        "warm-gray": "#8A8178",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
        widest35: "0.35em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-drop": {
          "0%": { transform: "scaleY(0)", opacity: "1", transformOrigin: "top" },
          "80%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", opacity: "0", transformOrigin: "top" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease forwards",
        "scroll-drop": "scroll-drop 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
