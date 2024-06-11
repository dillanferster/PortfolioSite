/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['"Bebas Neue"', "sans-serif"],
        Armata: ["Armata", "sans-serif"],
        UbuntuMono: ['" Ubuntu Mono"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
