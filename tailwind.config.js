/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './{index,attire,travel,faq,events,venue}.html',
  ],
  theme: {
    extend: {
      colors: {
        // rgb(196 42 42)
        // rgb(203 0 0)
        'india-red': 'rgb(195 0 0)',
        'india-yellow': '#ffcc00',
        'india-blue': 'rgb(172 209 217)',
        'india-green': 'rgb(59 120 82)',
        'india-black': 'rgb(72 71 71)',
        'india-orange': 'rgb(230, 153, 42)',
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
