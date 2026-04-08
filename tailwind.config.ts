/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef3e2",
          100: "#fde4b9",
          200: "#fcd48c",
          300: "#fbc35e",
          400: "#fab63c",
          500: "#f9a825",
          600: "#f59220",
          700: "#ef7918",
          800: "#e96212",
          900: "#df3d08",
        },
        burgundy: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#8b1a2b",
          600: "#7a1726",
          700: "#6a1321",
          800: "#5a101c",
          900: "#3e0b13",
        },
        cream: {
          50: "#fffdf7",
          100: "#fefaf0",
          200: "#fdf5e1",
          300: "#fcefd2",
          400: "#fbe9c3",
          500: "#f5e6cc",
        },
        dark: {
          700: "#2d2013",
          800: "#1f1609",
          900: "#120d05",
        },
        teal: {
          50: "#e6f5f4",
          100: "#b3e0dd",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#1a5c5a",
          600: "#17504e",
          700: "#134442",
          800: "#0f3836",
          900: "#0a2624",
          950: "#071a19",
        },
        gold: {
          50: "#fdf8eb",
          100: "#f9edcc",
          200: "#f3dba0",
          300: "#e8c468",
          400: "#d4a843",
          500: "#c9982e",
          600: "#b8860b",
          700: "#9a7209",
          800: "#7c5c07",
          900: "#5e4505",
        },
        navy: {
          800: "#0d1b2a",
          900: "#0a1424",
          950: "#06101d",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(10,20,36,0.94) 0%, rgba(13,27,42,0.90) 30%, rgba(26,92,90,0.85) 70%, rgba(10,20,36,0.95) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #fffdf7 0%, #fefaf0 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #1f1609 0%, #2d2013 50%, #120d05 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
