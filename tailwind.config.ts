import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradient: {
        main: "linear-gradient(108deg, #E3DEFF -0.31%, rgba(123, 108, 217, 0.39) 52.11%, rgba(56, 23, 254, 0.25) 103.45%)",
        secondary:
          "linear-gradient(111deg, rgba(255, 250, 250, 0.29) 0.44%, rgba(255, 255, 255, 0.20) 95.45%)",
      },
      primary: {
        main: "#40ed40",
      },
      secondary: {
        main: "#40ed40",
      },
      sidebarColor: {
        main: "#EDEAFD",
        scrollBarColor: "#C1B0FD",
        toggleOff: "#91C3F3",
        toggleOn: "#6ED371",
        cardBG: "#E7FFE980",
        checkBoxBG: "#B3ECB8",
        uncheckBoxBG: "#BBDBFB",
        checkColor: "#49A84C",
        sideBarBG: "rgba(237, 234, 253, 0.50)",
      },
      topbar: {
        greenIcon: "#49A84CB8",
        searchIcon: "#8465F7",
        whatsApp: "#49A84C",
        call: "#2A9EF1",
        location: "#8007F9",
        web: "#FB3D13",
        share: "#0FCEC3",
      },
      button: {
        main: "#4C86F9",
        secondary: "#FFFFFF",
        secondaryBG: "#D9D9D9",
        infoButton: "#F6BC00",
        backgroundInfo: "#FEF7E28A",
        backgroundMain: "#D1E1FF",
      },
      textColor: {
        main: "#000000",
        secondary: "#3B3939",
        timingColor: "#5B5555",
        priceColor: "#179D01",
        light: "#B3B3B3",
      },
      transparent: {
        main: "#3C3C3C80",
        secondary: "#FF0700",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      cardIconColor: {
        main: "#6942CB",
        disableIcon: "#636060",
      },
      card: {
        boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
        whistleIcon: "#FF0000",
        eyeIcon: "#CFA007",
        addToCartIcon: "#4C86F9",
        shopIcon: "#49A84C",
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        50: "50px",
      },
      favourite: {
        main: "#FF9900",
      },
      cart: {
        mainBG: "#EFEFEF",
        secondaryBG: "#E6E6E6",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};
export default config;
