/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#e2e8f0",
        "gray-50": "#cbd5e1",
        "gray-100": "#94a3b8",
        "gray-500": "#64748b",
        "primary-100": "#10b981",
        "primary-300": "#059669",
        "primary-500": "#047857",
        "secondary-400": "#b91c1c",
        "secondary-500": "#991b1b",
      },
      content: {
        hometext: "url(./assets/home1.png)",
        aboutbg: "url(./assets/dzuns1.jpg)",
        footerlogo: "url(./assets/logo.png)",
        loader: "url(./assets/loader.png)",
        footertext: "url(./assets/footer1.png)",
      },
    },
  },
  plugins: [],
};
