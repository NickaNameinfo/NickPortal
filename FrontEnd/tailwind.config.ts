const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      width: {
        "webkit-fill-available": "-webkit-fill-available",
      },
      backgroundColor: {
        "primary-500": "var(--primary-500)",
        "primary-900": "var(--primary-900)",
        "warning-900": "var(--warning-900)",
        red: "rgba(255, 7, 0, 1)",
      },
      spacing: {
        "24x22": "24px 22px",
        "50": "50px",
        m100: "100px",
      },
      // ... Other theme extensions
    },
    screens: {
      xm: { min: "320px" },
      mm: { min: "375px" },
      ml: { min: "425px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1440px" },
      "3xl": { min: "1536px" },
      "4xl": "2560px",
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        // ... Layout configuration
      },
      themes: {
        light: {
          layout: {
            boxShadow: {
              // ... Box shadow definitions
            },
          },
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",

            // ... Define other colors for the light theme
          },
        },
        dark: {
          backgroundColor: {
            "primary-500": "var(--primary-500)",
          },
          layout: {
            boxShadow: {
              // ... Box shadow definitions
            },
          },
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",

            // ... Define other colors for the dark theme
          },
        },
        mytheme: {
          // custom theme
          extend: "dark", // Extend from the dark theme
          colors: {
            primary: {
              DEFAULT: "#4C86F9",
              900: "var(--primary-900)",
            },
            warning: {
              900: "var(--warning-900)",
            },
            secondary: {
              DEFAULT: "#49A84CB8",
            },
            focus: "#BEF264",
            // ... Define other colors for your custom theme
          },
        },
      },
    }),
  ],
};
