/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#280096",
          "secondary": "#ff3250",
          "accent": "#50f096",
          "neutral": "#280096",
          "base-100": "#f8f8f8",
          "base-content": "#280096",

          "info": "#280096",
          "success": "#50f096",
          "warning": "#280096",
          "error": "#ff3250",
        },
      },
    ],
  },
}

