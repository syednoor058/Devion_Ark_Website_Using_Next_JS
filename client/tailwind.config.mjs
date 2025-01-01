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
        lightSecondary: "#999999",
        darkPrimary: "#121212",
        darkSecondary: "#1B1B1B",
        accentColor: "#c8f31d",
        lightTitleText: "#FFFFFF",
        lightBodyText: "#999999",
        darkTitleText: "#121212",
        darkBodyText: "#212529",
      },
    },
  },
  plugins: [],
};
