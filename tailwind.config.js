/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": "'TikTok Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        "white-200": "#FAFAFA",
        gray: "#5C6672",
        "gray-200": "#f2f2f2",
        "gray-300": "#cfcfcf",
        "gray-400": "#5C6672",
        "gray-500": "#F6F6F7",
        "gray-600": "#9C9A9A",
        "gray-700": "#F8F8F8",
        "gray-800": "#E4E4E4",
        "green-100": "#97DC82",
        "green-200": "#96ED7C",
        "green-300": "#59C339",
        "green-400": "#419427",
        "green-500": "#4ec289",
        "blue-light": "#F6F9FC",
        "blue-light-200": "#D4E1FF",
        blue: "#3B57A9",
        "blue-10": "#D0D8FF",
        "blue-50": "#334598",
        "blue-100": "#F2F4FF",
        "blue-150": "#E7EBFF",
        "blue-200": "#F3F5FF",
        "blue-250": "#D5E6FA",
        "blue-300": "#415AA5",
        "blue-400": "#324793",
        "blue-500": "#4054AE",
        "blue-600": "#2E4585",
        "blue-650": "#506BBD",
        "blue-700": "#3455AA",
        "blue-800": "#0F3B8E",
        "blue-900": "#012169",
        "fill-blue": "#6690FA",
        "dark": "#282828",
        "dark-two": "#333333",
        "footer-bg": "#EBFFFD",
        "banner-color": "#4F65D9",
        "star-color": "#FFB71D",
        "bnr-dark-bg": "#070C1B",
        "rating-color": "#FFB016"
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1600px",
      }
    }
  },
  plugins: [],
}

