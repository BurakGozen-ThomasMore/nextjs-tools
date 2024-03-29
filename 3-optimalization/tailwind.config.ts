import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.mono],
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
