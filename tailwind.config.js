module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-/,
      variants: ["hover"],
    },
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      spaceGro: ["Space Grotesk", "sans-serif"],
    },
    screens: {
      mobile: "640px",
      tablet: "768px",
      smallLaptop: "1024px",
      desktop: "1280px",
      bigLaptop: "1440px",
      television: "1536px",
    },
    extend: {
      fontSize: {
        10: ["0.625rem", "0.938rem"],
        12: ["0.75rem", "1rem"],
        13: ["0.813rem", "1.125rem"],
        14: ["0.875rem", "1.118rem"],
        16: ["1rem", "1.313rem"],
        18: ["1.125rem", "2rem"],
        20: ["1.25rem", "1.688rem"],
        24: ["1.5rem", "2.063rem"],
        30: ["2rem", "2.813rem"],
        40: ["2.5rem", "3.375rem"],
        64: ["4rem", "4.375rem"],
      },
      colors: {
        crypGreen: {
          500: "#6ED7D3",
          600: "#5abfbc",
          800: "#388F88",
        },
      },
      width: {
        600: "600px",
        500: "500px",
      },
      backgroundImage: {
        hotel: "url('/images/hero.png')",
        gradient: "url('/images/gradient.png')",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
