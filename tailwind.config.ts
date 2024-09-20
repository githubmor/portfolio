import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/daisyui/dist/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT:"var(--grey)",
          50:"var(--grey-50)",
          100:"var(--grey-100)",
          200:"var(--grey-200)",
          300:"var(--grey-300)",
          400:"var(--grey-400)",
          500:"var(--grey-500)",
          600:"var(--grey-600)",
          700:"var(--grey-700)",
          800:"var(--grey-800)",
          900:"var(--grey-900)",
          950:"var(--grey-950)",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {themes:false},
};
export default config;
