/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './{index,attire,travel,faq,events,venue}.html',
  ],
  theme: {
    extend: {
      colors: {
        'india-red': 'rgb(209 0 0)',
        'india-yellow': '#ffcc00',
        'india-blue': 'rgb(44 100 206)',
        'india-green': 'rgb(25 75 45)',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      india: ['EphemeraEgyptian'],
      ballet: ['Ballet'],
      kobe: ['Kobe'],
    },
  },
  plugins: [],
};
