/** @type {import('tailwindcss').Config} */
// Remove the import statement if it's still there
// import typography from '@tailwindcss/typography'; 

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
  darkMode: 'class', // or 'media' depending on your setup
} 