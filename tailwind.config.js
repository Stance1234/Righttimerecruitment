// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx,vue}",
//     // Add other paths if needed:
//     "./public/index.html",
//     "./components/**/*.{js,jsx}",
//   ],
//   // ... rest of your config
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
extend: {
      fontFamily: {
        'readex-pro': ['Readex Pro', 'sans-serif'],
      },
    },
  plugins: [],
};