/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs:'320px',
        xs1:'375px',
        xs2:'430px',
        xs3:'470px',
        sm: "540px",
        sm1: "640px",
        md1: "880px",
        "2xl": "1360px",
      },
      fontFamily: {
        dancingScript: ['var(--font-Dancing_Script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
