/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oregano: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bce5bc",
          300: "#8fd18f",
          400: "#5ab35a",
          500: "#3a963a",
          600: "#2d782d",
          700: "#265f26",
          800: "#224d22",
          900: "#1d401d",
        },
        chilli: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      fontFamily: {
        briqusion: ["Briqusion", "sans-serif"],
        rubyring: ["RubyRing", "sans-serif"],
        rooster: ["Rooster", "cursive"],
        orange: ["Orange", "serif"],
        casko: ["Casko", "cursive"],
      },
    },
  },
  plugins: [],
};
