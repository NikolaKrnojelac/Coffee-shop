/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F2ED',
        dark: '#1A1410',
        muted: '#6B6760',
        surface: '#EDE9E3',
        accent: '#C8A97A',
        border: '#1A1814',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}