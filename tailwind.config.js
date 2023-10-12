import {
  nextui
} from '@nextui-org/react';

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  mode: "jit",
  themes: {
    dark: {
      colors: {
        primary: {
          DEFAULT: "#BEF264",
          foreground: "#000000",
        },
        focus: "#BEF264",
      }
    }
  },
  theme: {
    extend: {
      animation: {
        fadeOut: 'fadeOut 2s ease-in-out',
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': {
            backgroundColor: 1
          },
          '100%': {
            backgroundColor: 0
          },
        },
        'fadeIn': {
          '0%': {
            backgroundColor: 0
          },
          '100%': {
            backgroundColor: 1
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#6F4FF2",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      }
    }
  })]
}
