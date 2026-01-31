/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Very dark grey, almost black
        surface: "#121212",    // Slightly lighter for cards
        surfaceHighlight: "#1E1E1E",
        primary: "#D4AF37",    // Metallic Gold
        primaryLight: "#F3E5AB", // Champagne
        textMain: "#F5F5F5",   // Off-white
        textMuted: "#A3A3A3",  // Grey text
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}