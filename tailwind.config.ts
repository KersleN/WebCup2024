import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '1023px'},
      'desktop': {'min': '1024px'},
    },
    extend: {
      colors: {
        lightcyan: '#84ffff',
        gradientLeft: '#8e24aa',
        gradientRight: '#1e88e5',
      },
      animation: {
        scalepulse: "scalepulse 8s ease-in-out infinite",
        moveFade: "moveFade 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      },
      keyframes: {
        scalepulse: {
          '0%': { "scale": "1" },
         '50%': { "scale": "1.05" },
         '100%': { "scale": "1" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        moveFade: {
          '0%': { 
            opacity: "0",
            transform: "rotate(45deg) translate(-10px, -10px)",
          },
          '50%': { 
            opacity: "1",
          },
          '100%': {    
            opacity: "0",
            transform: "rotate(45deg) translate(10px, 10px)",
          }
        }
      },
   
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


export default config;
