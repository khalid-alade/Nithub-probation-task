/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "muted": "var(--muted)",
        "primary": "var(--primary)",
        "dashboard-primary": "var(--dashboard-primary)",
        "primary-muted": "var(--primary-muted)",
        "dashboard-primary-muted": "var(--dashboard-primary-muted)",
        "secondary": "var(--secondary)",
        "dashboard-secondary": "var(--dashboard-secondary)",
        "secondary-muted": "var(--secondary-muted)",
        "alert": "var(--alert)"
      },
      screens: {
        pc: "1200px",
        tablet: "900px",
        mobile: "700px",
      }
    },
  },
  plugins: [],
}

