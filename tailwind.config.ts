import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A5F",
        teal: "#028090",
        "teal-mid": "#02A896",
        "teal-soft": "#E8F7F9",
        surface: "#F4F7FA",
      },
      boxShadow: {
        soft: "0 10px 28px rgba(30, 58, 95, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
