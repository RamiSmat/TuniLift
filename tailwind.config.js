/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'normal': '0px 5px 10px rgba(0, 0, 0, 0.1)',
        'hover': '0px 10px 15px rgba(0, 0, 0, 0.2)', /* Change this to the desired shadow color */
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

