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
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
