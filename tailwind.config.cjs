/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#00B398'
        }
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        // '220x1': '220px 1fr',
      }
    },
    plugins: []
  }
};