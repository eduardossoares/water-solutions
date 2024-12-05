export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        homeImg: "url('/background-home.png')"
      }
    },
  },
  plugins: [],
}