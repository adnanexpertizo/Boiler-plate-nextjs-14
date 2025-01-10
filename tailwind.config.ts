import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',  // Enable dark mode via the 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#ffffff",
          secondary: "#22d3ee",
          accent: "#fbbf24",
          neutral: "#3d4451",
          "base-100": "#ffffff", 
          "base-200": "#f5f5f4", 
          "base-300": "#f3f4f6", 
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      {
        customdark: {
          primary: "#7e22ce",
          secondary: "#2dd4bf",
          accent: "#fcd34d",
          neutral: "#1f2937",
          "base-100": "#1e293b", 
          "base-200": "#111827",
          "base-300": "#0f172a",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ]
  },
};

export default config;
