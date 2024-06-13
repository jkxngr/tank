/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1336px",
        },
      },
      colors: {
        thamarBlack: "#181818",
        aircraftGrey: "#939697",
        woodCarcoal: "#464646",
        pastelOrange: "#FF9549",
        charlestoneGreen: "#252C2C",
        satinDeepBlack: "#1C2121",
        ferrariRed: "#FF2B00",
      },
      backgroundImage: {
        heroBg: "url('./assets/img/hero-Bg.png')",
        credit: "url('./assets/img/credit.png')",
        map: "url('./assets/img/map.png')",
     
      },
    },
  },
  plugins: [],
};
