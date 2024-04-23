/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "main-sm": "calc(100vh - 118px)",
        "main-md": "calc(100vh - 56px)",
        "main-lg": "calc(100vh - 92px)",
      },
      width: {
        div: "calc(100% - 256px)",
      },
    },
  },
  plugins: [],
};
