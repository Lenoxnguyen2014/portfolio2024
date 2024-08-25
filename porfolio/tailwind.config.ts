import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1D1E1F',
        'primary': 'rgb(218, 197, 167)',
        'secondary': '#14B8A6'
      }
    },
  },
  plugins: [],
};
export default config;
