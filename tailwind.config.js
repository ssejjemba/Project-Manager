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
      secondary: "hsla(242, 48%, 58%, 0.1)",
      secondaryHover: "hsla(242, 48%, 58%, 0.25)",
    },
  },
  plugins: [],
};
