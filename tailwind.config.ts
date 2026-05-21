import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef0f7",
          100: "#d6dbec",
          200: "#aeb7d8",
          300: "#7d8bbf",
          400: "#4f5fa1",
          500: "#2f3d80",
          600: "#202c63",
          700: "#16205a",
          800: "#0e1746",
          900: "#0a1038",
          950: "#060a26",
        },
        ink: "#0b0f1f",
        cream: "#f7f8fb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 23, 70, 0.18)",
        card: "0 18px 60px -20px rgba(14, 23, 70, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 70px -20px rgba(10,16,56,0.6)",
      },
      backgroundImage: {
        "grid-navy":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "radial-fade":
          "radial-gradient(80% 80% at 50% 0%, rgba(47,61,128,0.35) 0%, transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        shimmer: "shimmer 1.6s infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
