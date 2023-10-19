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
      transitionProperty: {
        'width': 'width'
      },
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
          black: '#000',
          white: '#fff',
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
      },
      "light": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          background:"#f3f2fc",
          // =~= Theme Properties =~=
          "--theme-font-family-base": `system-ui`,
          "--theme-font-family-heading": `system-ui`,
          "--theme-font-color-base": "0 0 0",
          "--theme-font-color-dark": "255 255 255",
          "--theme-rounded-base": "9999px",
          "--theme-rounded-container": "8px",
          "--theme-border-base": "1px",
          // =~= Theme On-X Colors =~=
          "--on-primary": "255 255 255",
          "--on-secondary": "0 0 0",
          "--on-tertiary": "255 255 255",
          "--on-success": "0 0 0",
          "--on-warning": "0 0 0",
          "--on-error": "0 0 0",
          "--on-surface": "0 0 0",
          // =~= Theme Colors  =~=
          // primary | #5b51c4 
          "--color-primary-50": "230 229 246", // #e6e5f6
          "--color-primary-100": "222 220 243", // #dedcf3
          "--color-primary-200": "214 212 240", // #d6d4f0
          "--color-primary-300": "189 185 231", // #bdb9e7
          "--color-primary-400": "140 133 214", // #8c85d6
          "--color-primary-500": "91 81 196", // #5b51c4
          "--color-primary-600": "82 73 176", // #5249b0
          "--color-primary-700": "68 61 147", // #443d93
          "--color-primary-800": "55 49 118", // #373176
          "--color-primary-900": "45 40 96", // #2d2860
          // secondary | #6ae8b5 
          "--color-secondary-50": "233 252 244", // #e9fcf4
          "--color-secondary-100": "225 250 240", // #e1faf0
          "--color-secondary-200": "218 249 237", // #daf9ed
          "--color-secondary-300": "195 246 225", // #c3f6e1
          "--color-secondary-400": "151 239 203", // #97efcb
          "--color-secondary-500": "106 232 181", // #6ae8b5
          "--color-secondary-600": "95 209 163", // #5fd1a3
          "--color-secondary-700": "80 174 136", // #50ae88
          "--color-secondary-800": "64 139 109", // #408b6d
          "--color-secondary-900": "52 114 89", // #347259
          // tertiary | #8553eb 
          "--color-tertiary-50": "237 229 252", // #ede5fc
          "--color-tertiary-100": "231 221 251", // #e7ddfb
          "--color-tertiary-200": "225 212 250", // #e1d4fa
          "--color-tertiary-300": "206 186 247", // #cebaf7
          "--color-tertiary-400": "170 135 241", // #aa87f1
          "--color-tertiary-500": "133 83 235", // #8553eb
          "--color-tertiary-600": "120 75 212", // #784bd4
          "--color-tertiary-700": "100 62 176", // #643eb0
          "--color-tertiary-800": "80 50 141", // #50328d
          "--color-tertiary-900": "65 41 115", // #412973
          // success | #47c360 
          "--color-success-50": "227 246 231", // #e3f6e7
          "--color-success-100": "218 243 223", // #daf3df
          "--color-success-200": "209 240 215", // #d1f0d7
          "--color-success-300": "181 231 191", // #b5e7bf
          "--color-success-400": "126 213 144", // #7ed590
          "--color-success-500": "71 195 96", // #47c360
          "--color-success-600": "64 176 86", // #40b056
          "--color-success-700": "53 146 72", // #359248
          "--color-success-800": "43 117 58", // #2b753a
          "--color-success-900": "35 96 47", // #23602f
          // warning | #e9015c 
          "--color-warning-50": "252 217 231", // #fcd9e7
          "--color-warning-100": "251 204 222", // #fbccde
          "--color-warning-200": "250 192 214", // #fac0d6
          "--color-warning-300": "246 153 190", // #f699be
          "--color-warning-400": "240 77 141", // #f04d8d
          "--color-warning-500": "233 1 92", // #e9015c
          "--color-warning-600": "210 1 83", // #d20153
          "--color-warning-700": "175 1 69", // #af0145
          "--color-warning-800": "140 1 55", // #8c0137
          "--color-warning-900": "114 0 45", // #72002d
          // error | #c9c228 
          "--color-error-50": "247 246 223", // #f7f6df
          "--color-error-100": "244 243 212", // #f4f3d4
          "--color-error-200": "242 240 201", // #f2f0c9
          "--color-error-300": "233 231 169", // #e9e7a9
          "--color-error-400": "217 212 105", // #d9d469
          "--color-error-500": "201 194 40", // #c9c228
          "--color-error-600": "181 175 36", // #b5af24
          "--color-error-700": "151 146 30", // #97921e
          "--color-error-800": "121 116 24", // #797418
          "--color-error-900": "98 95 20", // #625f14
          // surface | #94d781 
          "--color-surface-50": "239 249 236", // #eff9ec
          "--color-surface-100": "234 247 230", // #eaf7e6
          "--color-surface-200": "228 245 224", // #e4f5e0
          "--color-surface-300": "212 239 205", // #d4efcd
          "--color-surface-400": "180 227 167", // #b4e3a7
          "--color-surface-500": "148 215 129", // #94d781
          "--color-surface-600": "133 194 116", // #85c274
          "--color-surface-700": "111 161 97", // #6fa161
          "--color-surface-800": "89 129 77", // #59814d
          "--color-surface-900": "73 105 63", // #49693f
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
