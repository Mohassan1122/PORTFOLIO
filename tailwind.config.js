// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Montserrat", "Inter", "sans-serif"],
      },
      colors: {
        bodyColor: "#f8fafc",
        headingColor: "#0f172a",
        lightText: "#64748b",
        designColor: "#4f46e5",
        accentBlue: "#2563eb",
        cardBg: "#ffffff",
      },
      boxShadow: {
        shadowOne: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        cardHover: "0 20px 30px -10px rgba(79, 70, 229, 0.12), 0 10px 15px -5px rgba(15, 23, 42, 0.04)",
        glow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}



