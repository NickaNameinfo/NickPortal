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
      backgroundColor: {
        "primary-500": "var(--primary-500-color)",
      },
      // ... Other theme extensions
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
            "primary-500": "var(--primary-500-color)",
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
              // Define your custom theme primary colors
              // 500: "var(--primary-500-color)", // Corresponds to bg-primary-500
              DEFAULT: "orange",
              foreground: "#000000",
            },
            focus: "#BEF264",
            // ... Define other colors for your custom theme
          },
        },
      },
    }),
  ],
};
