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
        lightSecondary: "#f5f5f5",
        darkPrimary: "#121212",
        darkSecondary: "#1b1b1b",
        accentColor: "#5c92ff",
        accentColor2: "#673de5",
        accentColor3: "#c8f31d",
        lightTitleText: "#FFFFFF",
        lightBodyText: "#f5f5f5",
        darkTitleText: "#121212",
        darkBodyText: "#212529",
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
