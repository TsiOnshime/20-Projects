/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24", // Yellow
        secondary: "#1E40AF", //  Blue
        accent: "#EF4444", // Red
        background: "#F3F4F6", // Gray
        textPrimary: "#111827", // Dark Gray
        textSecondary: "#6B7280", // Light Gray
      },
    },
  },
  plugins: [],
};

