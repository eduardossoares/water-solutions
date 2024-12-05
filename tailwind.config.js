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
        homeImg: "url('/background-home.png')",
        cistern: "url('/cisternas-01.jpg')",
        cistern2: "url('/cisternas-02.jpg')",
        truck1: "url('/caminhoes-01.png')",
        truck2: "url('/produto-caminhao.png')",
        system1: "url('/sistema-captacao-01.jpg')",
        system2: "url('/sistema-captacao-02.jpg')"
      }
    },
  },
  plugins: [],
}