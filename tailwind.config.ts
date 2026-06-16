import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: "#4F7D5A",
        sakura: "#E98BA6",
        sumi: "#24302A",
        washi: "#F8F5EE",
        indigoInk: "#344E7A",
      },
      boxShadow: {
        soft: "0 14px 45px rgba(36, 48, 42, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
