/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        mobile_bg: "url('./assets/images/bg-sidebar-mobile.svg')",
        desktop_bg: "url('./assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
