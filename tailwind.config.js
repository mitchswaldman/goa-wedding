/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'india-red': 'rgb(224 0 0)',
        'india-yellow': '#ffcc00',
        'india-blue': '#67ade7',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      india: ['EphemeraEgyptian'],
      ballet: ['Ballet'],
    },
  },
  plugins: [],
};
