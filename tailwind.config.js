/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        customGeneralBackground: 'rgb(var(--backgroundcolor-general) / <alpha-value>)',
        customNavbarBackground: 'rgb(var(--backgroundcolor-navbar) / <alpha-value>)',
        customFooterBackground: 'rgb(var(--backgroundcolor-footer) / <alpha-value>)',
        customInfoboxBackground: 'rgb(var(--backgroundcolor-infobox) / <alpha-value>)',
        
      },
      colors: {
        customLink: 'rgb(var(--color-link) / <alpha-value>)',
        customText: 'rgb(var(--color-text) / <alpha-value>)',
        customTitle: 'rgb(var(--color-title) / <alpha-value>)',
        customSubtitle: 'rgb(var(--color-subtitle) / <alpha-value>)',
      },
      // boxShadow:{
      //   customShadow: 'rgb(var(--color-title) / <alpha-value>)',
      // }
    },
  },
  plugins: [],
  darkMode: 'class',
}

