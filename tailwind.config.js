/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#18427F",
        "brand-yellow": "#FFBC45",
        "brand-green": "#30A583",
        "brand-black": "#151C25",
        "brand-grey": "#2C3F3F",
      },
      spacing: {
        13: "3.25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "black-panther": "url('/team/black-panther.jpg')",
        "captain-america": "url('/team/captain-america.jpg')",
        "deadpool": "url('/team/deadpool.jpg')",
        "odin-borson": "url('/team/odin-borson.jpg')",
        "spider-man": "url('/team/spider-man.jpg')",
        "wanda": "url('/team/wanda.jpg')",
      },
    },
  },
  plugins: [],
};
