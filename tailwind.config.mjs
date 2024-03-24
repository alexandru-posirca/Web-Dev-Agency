const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1200px",
      "md-media": { raw: "(min-width: 768px)" },
      "lg-media": { raw: "(min-width: 1025px)" },
      "xl-media": { raw: "(min-width: 1200px)" },
    },
    colors: {
      "black-main": "#000000",
      "white-main": "#FAFAF9",
      green: "#38af48",
      gray: {
        200: "#b9b9ba",
        500: "#171619",
      },
      orange: {
        200: "#F9A602",
        500: "#FF7417",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        text_reveal_box: {
          "50%": {
            width: "100%",
            left: "0",
          },
          "100%": {
            width: "0",
            left: "100%",
          },
        },
        text_reveal: {
          "100%": {
            color: "#F9A602"
          }
        },
        text_reveal_main: {
          "100%": {
            color: "#FAFAF9",
          },
        },
        scroll: {
          "0": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100px * 10))",
          }
        }
      },
      animation: {
        textrevealbox: "text_reveal_box 1s ease",
        textreveal: "text_reveal 0.5s ease forwards",
        textrevealmain: "text_reveal_main 3s ease forwards",
        // scroll: "scroll 12s linear infinite"
      },
    },
  },
  plugins: [],
};
