import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#fdfbf6",
          100: "#faf6ec",
          200: "#f3ecdb",
          300: "#e9dec3",
          400: "#d9c8a0"
        },
        ink: {
          950: "#0d0907",
          900: "#1a120e",
          800: "#241813",
          700: "#3a2820",
          600: "#5a4538"
        },
        gold: {
          50: "#fff8e1",
          100: "#fdecc4",
          200: "#f0d48a",
          300: "#dcb464",
          400: "#c3953f",
          500: "#a87528",
          600: "#82581a",
          700: "#5a3c10"
        },
        champagne: {
          DEFAULT: "#e8c98a",
          soft: "#f4e0a8",
          deep: "#b9892f"
        },
        wine: {
          50: "#fbeef0",
          100: "#f3cfd4",
          400: "#a6293a",
          500: "#841d2c",
          600: "#6b1722",
          700: "#4d101a",
          800: "#330a11",
          900: "#1f060a"
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg,#f5d488 0%,#e8b85c 35%,#b8822a 70%,#f5d488 100%)",
        "gold-soft":
          "linear-gradient(135deg,#fdecc4 0%,#e8b85c 50%,#8a5e1c 100%)",
        "radial-gold":
          "radial-gradient(60% 60% at 50% 40%,rgba(232,184,92,0.18) 0%,rgba(7,5,6,0) 70%)"
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(232,184,92,0.35)",
        glow: "0 0 60px -10px rgba(232,184,92,0.45)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.05)"
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
