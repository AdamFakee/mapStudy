import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#155e94",
        "primary-light": "#2470aa",
        secondary: "#155e94",
        background: "#f3f4f5",
        block: "#fff",
        "primary-typo": "#1b1b1b",
        "secondary-typo": "#295779",
      },
      fontFamily: {
        beVnPro: ["Be Vietnam Pro", "serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
