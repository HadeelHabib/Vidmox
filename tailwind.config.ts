import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/theme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js'


  ],
  //   --light-blue: ;
  // --dark-blue: ;
  // --green-mix: ;
  // --yello-mix: ;
  // --pink-mix: ;
  // --mov-mix: ;
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-blue': "#186EF2",
        'dark-blue' : '#6D18EF',
        'green' : '#A1D661',
        'yello' : '#E8EC3E',
        'pink' : '#E8937C',
        'mov' : '#8C91ED',
        'off-black' : '#23232326',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
