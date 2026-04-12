/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C5D",
        secondary: "#FFFFFF",
        accent: "#F4C430",
        "text-dark": "#1A1A1A",
        gray: "#6B7280",
      },
    },
  },
  plugins: [],
};
