import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            veryLightGreyBG: "hsl(0, 0%, 98%)",
            darkGrayInput: "hsl(0, 0%, 52%)",
            veryDarkBlueText: "hsl(200, 15%, 8%)",
          }
        },
        dark: {
          colors: {
            veryDarkBlueBG: "hsl(207, 26%, 17%)",
            darkBlueElements: "hsl(209, 23%, 22%)",
          }
        },
        neutral: {
          colors: {
            whiteTXT: "hsl(0, 0%, 100%)",
          },
        },
      },
    }),
  ],
};
export default config;
