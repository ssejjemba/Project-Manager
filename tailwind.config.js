/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "hsl(242, 48%, 58%)",
      red: "hsl(0, 78%, 63%)",
      purpleHover: "hsl(243, 100%, 82%)",
      redHover: "hsl(0, 100%, 80%)",
      black: "hsl(237, 100%, 4%)",
      darkBg: "hsl(235, 16%, 15%)",
      darkGrey: "hsl(235, 12%, 19%)",
      darkLines: "hsl(236, 11%, 27%)",
      medGray: "hsl(216, 15%, 57%)",
      lightLines: "hsl(221, 69%, 94%)",
      lightBg: "hsl(220, 69%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        hXL: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "2.4rem",
          lineHeight: "3rem",
        },
        hL: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "1.8rem",
          lineHeight: "2.3rem",
        },
        hM: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "1.5rem",
          lineHeight: "1.9rem",
        },
        hS: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          letterSpacing: "2.4px",
        },
        bL: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "1.3rem",
          lineHeight: "2.3rem",
        },
        bM: {
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
        },
      },
    },
  },
  plugins: [],
};
