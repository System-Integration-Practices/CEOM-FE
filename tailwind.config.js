/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transparent: "transparent",
      current: "currentColor",
      colors: {
        primary: {
          DEFAULT: "#796EFF",
          light: {
            10: "#867CFF",
            20: "#948BFF",
            30: "red",
            40: "#AFA8FF",
            50: "#BCB7FF",
            60: "#C9C5FF",
            70: "#D7D3FF",
            80: "#E4E2FF",
            90: "#F2F1FF",
          },
          dark: {
            10: "#6D63E5",
            20: "#6158CC",
            30: "#554DB3",
            40: "#494299",
            50: "#3D3780",
            60: "#302C66",
            70: "#24214D",
            80: "#181633",
            90: "#0C0B1A",
          },
        },
        primary2: {
          DEFAULT: "#23A9F9",
          light: {
            10: "#39B2FA",
            20: "#4FBAFA",
            30: "#65C3FB",
            40: "#7BCBFB",
            50: "#91D4FC",
            60: "#A7DDFD",
            70: "#BDE5FD",
            80: "#D3EEFE",
            90: "#E9F6FE",
          },
          dark: {
            10: "#1F98E0",
            20: "#1C87C7",
            30: "#1876AE",
            40: "#156595",
            50: "#11557D",
            60: "#0E4464",
            70: "#0A334B",
            80: "#072232",
            90: "#031119",
          },
        },
        secondary: {
          DEFAULT: "#FFA900",
          light: {
            10: "#FDC63D",
            20: "#FDCD52",
            30: "#FED368",
            40: "#FED97D",
            50: "#FEE093",
            60: "#FEE6A9",
            70: "#FEECBE",
            80: "#FFF2D4",
            90: "#FFF9E9",
          },
          dark: {
            10: "#E4AD23",
            20: "#CA9A1F",
            30: "#B1861B",
            40: "#987317",
            50: "#7F6013",
            60: "#654D10",
            70: "#4C3A0C",
            80: "#332608",
            90: "#191304",
          },
        },
        secondary2: {
          DEFAULT: "#FF5263",
          light: {
            10: "#FF6373",
            20: "#FF7582",
            30: "#FF8692",
            40: "#FF97A1",
            50: "#FFA8B1",
            60: "#FFBAC1",
            70: "#FFCBD0",
            80: "#FFDCE0",
            90: "#FFEEEF",
          },
          dark: {
            10: "#E54A59",
            20: "#CC424F",
            30: "#B33945",
            40: "#99313B",
            50: "#802931",
            60: "#662128",
            70: "#4D191E",
            80: "#331014",
            90: "#1A080A",
          },
        },
        black: {
          DEFAULT: "#1B2432",
          10: "#323A46",
          20: "#49505B",
          30: "#5F666F",
          40: "#767C84",
          50: "#8D9198",
          60: "#A4A7AD",
          70: "#BBBDC1",
          80: "#D1D3D6",
          90: "#E8E9EA",
        },
        white: {
          DEFAULT: "#fff",
          10: "#E5E5E5",
          20: "#CCC",
          30: "#B3B3B3",
          40: "#999",
          50: "#808080",
          60: "#666",
          70: "#4D4D4D",
          80: "#333",
          90: "#1A1A1A",
        },
      },
      fontSize: {
        "heading-1": [
          "2.4rem",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "2.2rem",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
        "heading-3": [
          "2.2rem",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
        "heading-4": [
          "1.8rem",
          {
            lineHeight: "155.556%",
            fontWeight: "600",
          },
        ],
        "body-1": [
          "1.6rem",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
        "body-2": [
          "1.6rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
          },
        ],
        "body-3": [
          "1.6rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-4": [
          "1.4rem",
          {
            lineHeight: "157.143%",
            fontWeight: "600",
          },
        ],
        "body-5": [
          "1.4rem",
          {
            lineHeight: "157.143%",
            fontWeight: "500",
          },
        ],
        "body-6": [
          "1.4rem",
          {
            lineHeight: "157.143%",
            fontWeight: "400",
          },
        ],
        "body-7": [
          "1.2rem",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
        "body-8": [
          "1.2rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
          },
        ],
        "body-9": [
          "1.2rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
