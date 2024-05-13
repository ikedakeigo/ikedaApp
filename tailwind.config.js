/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // ブレイクポイントの上書き
        sm: "640px", //デフォルトは640px
        md: "768px", //デフォルトは768px
        xl: "1024px", //デフォルトは1024px
        // ブレイクポイントの追加
        "my-break-point": "350px",
      },
    },
  },
  plugins: [],
};
