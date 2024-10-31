/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '92px',
        ph: '20px',
        tb: '20px',
        md:'64px'
      },
    },
    screens: {
      ph: '360px',
      pl: '500px',
      sm: '640px',
      tb: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1468px'
    },
    fontFamily: {
      primary: 'var(--font-Montserrat)',
      secondary: 'var(--font-Oxanium)'
    },
    extend: {
      colors: {

      },
      backgroundImage: {

      }
    },
  },
  plugins: [],
};
