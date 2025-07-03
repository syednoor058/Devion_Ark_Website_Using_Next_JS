/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightPrimary: "#FFFFFF",
        lightSecondary: "#9ca3af",
        darkPrimary: "#121212",
        darkSecondary: "#1b1b1b",
        accentColor: "#8c85ff",
        accentColor2: "#673de5",
        accentColor3: "#c8f31d",
        bgColor1: "#8c85ff",
      },
      fontFamily: {
        baumans: ["var(--font-baumans)"],
        poppins: ["var(--font-poppins)"],
        oswald: ["var(--font-oswald)"],
      }
    },
  },
  plugins: [],
};
