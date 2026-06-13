import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        cream: "#F2E4CC",
        ink: "#1A1A1A",
        verde: "#6B4F3A",
        terra: "#7A5230",
        senape: "#C9A04A",
        peach: "#e9cca2d4",
        accent: "#6B4F3A",
      },
    },
  },
  plugins: [],
} satisfies Config;
