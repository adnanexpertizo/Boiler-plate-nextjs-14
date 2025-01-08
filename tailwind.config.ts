import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  // daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#312e81",
          secondary: "#14b8a6",
          accent: "#10B981",
          neutral: "#111827",
          "base-100": "#F9FAFB",
          "base-200": "#6d8096",
          info: "#3B82F6",
          success: "#16A34A",
          warning: "#F59E0B",
          error: "#DC2626",
        },
      },
    ],
  // },
};
export default config;
