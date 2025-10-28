/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shade-white': '#FFFFFF',
        'shade-black': '#000000',
        'grey-100': '#F0F1F2',
        'grey-200': '#DFE0E2',
        'grey-300': '#CDCED1',
        'grey-400': '#98A2B3',
        'grey-500': '#B6B8BA',
        'grey-600': '#A3A6A9',
        'grey-700': '#787D81',
        'grey-800': '#4E5459',
        'grey-900': '#232B31',
        'success': '#27A963',
        'error': '#E45757',
        'warning': '#FFB442',
        'inprogress': '#FFB442',
        'accent': '#ADA1E6',
        'accent-pink': '#D562BE',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(78deg, rgba(246, 222, 198, 1) 0%, rgba(232, 114, 212, 1) 47%, rgba(193, 144, 217, 1) 71%, rgba(162, 220, 254, 1) 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(246, 222, 198, 0.12) 0%, rgba(38, 47, 53, 1) 80%)',
      },
      boxShadow: {
        'card': '0px 4px 25px 0px rgba(138, 143, 150, 0.11)',
        'accent': '0px -12px 23.899999618530273px -13px rgba(236, 138, 209, 0.91), 0px 5px 20.899999618530273px -4px rgba(184, 168, 229, 0.66)',
        'accent-small': '0px -4px 10.699999809265137px -4px rgba(236, 138, 209, 0.54), 0px 4px 7.5px -3px rgba(184, 168, 229, 0.51)',
      },
    },
  },
  plugins: [],
}
