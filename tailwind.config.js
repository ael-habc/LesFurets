/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customGray": "#4F4F4F",
        "textBlue": "#2F80ED",
        "buttonGray": "#BDBDBD",
        "buttonHoverGray": "#828282",
        "buttonTextGray": "#333333",
        "buttonTextHoverGray": "#FFFFFF",
        "buttonTextBlue": "#FFFFFF",
        "buttonTextHoverBlue": "#FFFFFF",
        "buttonBorderGray": "#BDBDBD",
        "buttonBorderHoverGray": "#828282",
      },
    },
  },
  plugins: [],
}