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
        cream: "#e9cca27a",
        ink: "#1A1A1A",
        verde: "#6B4F3A",
        terra: "#6B4F3A",
        senape: "#E9CCA2",
        peach: "#E9CCA2",
        accent: "#6B4F3A",
      },
    },
  },
  plugins: [],
} satisfies Config;
