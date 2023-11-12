import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      backgroundImage: {
        circular:
          "repeating-radial-gradient(hsl(var(--primary)) 2px,hsl(var(--background)) 5px,hsl(var(--background)) 40px)",
        "circular-sm":
          "repeating-radial-gradient(hsl(var(--primary)) 2px,hsl(var(--background)) 5px,hsl(var(--background)) 60px)",
        "circular-md":
          "repeating-radial-gradient(hsl(var(--primary)) 2px,hsl(var(--background)) 5px,hsl(var(--background)) 80px)",
        "circular-lg":
          "repeating-radial-gradient(hsl(var(--primary)) 2px,hsl(var(--background)) 5px,hsl(var(--background)) 100px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        "bk-purple-50": "#f5eafb",
        "bk-purple-100": "#e0c0f2",
        "bk-purple-200": "#d6aaee",
        "bk-purple-300": "#c280e5",
        "bk-purple-400": "#a341d8",
        "bk-purple-500": "#992bd4",
        "bk-purple-600": "#8927be",
        "bk-purple-700": "#7a23a9",
        "bk-purple-800": "#6b1e94",
        "bk-purple-900": "#5c1a7f",
        "bk-purple-1000": "#4c166a",
      },
    },
  },
  plugins: [],
};
export default config;
