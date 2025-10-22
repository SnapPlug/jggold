import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        sentient: ['Sentient', 'sans-serif'],
      },
      screens: {
        'mobile': '390px',
        'tablet': '810px', 
        'desktop': '1200px',
      },
      maxWidth: {
        'content': '1100px',
        'content-tablet': '900px',
      },
      spacing: {
        'section-padding': '120px',
        'section-padding-lg': '160px',
      },
    },
  },
  plugins: [],
};

export default config;
