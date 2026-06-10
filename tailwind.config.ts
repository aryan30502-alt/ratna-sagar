import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf7",
          100: "#faf6ef",
          200: "#f5efe3",
          300: "#ede5d4",
          400: "#ddd3be"
        },
        charcoal: {
          900: "#1a1612",
          800: "#2a2420",
          700: "#3d352e",
          600: "#564d44",
          500: "#6e6359"
        },
        gold: {
          50: "#fdf8ed",
          100: "#f8efd5",
          200: "#f0dca8",
          300: "#dfc682",
          400: "#c9a55a",
          500: "#b08d4a",
          600: "#a68542",
          700: "#8a6d30",
          800: "#6b5425"
        },
        champagne: {
          DEFAULT: "#c9a55a",
          soft: "#dfc682",
          deep: "#8a6d30"
        },
        wine: {
          50: "#fbeef0",
          100: "#f3cfd4",
          400: "#9a3848",
          500: "#7a2332",
          600: "#5e1a26",
          700: "#4d101a",
          800: "#330a11",
          900: "#1f060a"
        },
        // Keep ivory/ink for compatibility but map to new palette
        ivory: {
          50: "#fdfbf7",
          100: "#faf6ef",
          200: "#f5efe3",
          300: "#ede5d4",
          400: "#ddd3be"
        },
        ink: {
          950: "#1a1612",
          900: "#2a2420",
          800: "#3d352e",
          700: "#564d44",
          600: "#6e6359"
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #dfc682 0%, #c9a55a 35%, #8a6d30 70%, #c9a55a 100%)",
        "gold-soft":
          "linear-gradient(135deg, #f0dca8 0%, #c9a55a 50%, #6b5425 100%)",
        "radial-gold":
          "radial-gradient(60% 60% at 50% 40%, rgba(201,165,90,0.15) 0%, transparent 70%)"
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(176,141,74,0.3)",
        glow: "0 0 60px -10px rgba(176,141,74,0.35)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
        warm: "0 25px 60px -20px rgba(26,22,18,0.08)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        glow: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;
