/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "arena-font": ['"Eater"', "cursive"],
      },
      backgroundImage: {
        "custom-background": "url('/public/images/loginbackground.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
