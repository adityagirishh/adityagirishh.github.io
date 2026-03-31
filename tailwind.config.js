/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        zinc: {
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          900: '#111827',
        }
      }
    }
  },
  plugins: []
}
