const defaultThemes = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [defaultThemes.fontFamily.sans],
        nft: ['Quicksand', ...defaultThemes.fontFamily.mono],
      },
    },
    screens: {
      '2xlx': { max: '1535px' },
      xlx: { max: '1279px' },
      lgx: { max: '1023px' },
      mdx: { max: '767px' },
      smx: { max: '639px' },
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}