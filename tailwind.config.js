/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paypal: {
          blue: '#003087',
          lightBlue: '#0079C1',
          accent: '#00457C',
          dark: '#0e1e25',
          grayBg: '#f5f7fa',
          pillBg: '#ebf1f5',
        }
      },
      fontFamily: {
        sans: [
          'PayPal Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
