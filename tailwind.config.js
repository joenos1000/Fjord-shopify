/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'fjord-camel': '#A78952',
        'fjord-coffee': '#3C2313',
        'fjord-ivory': '#FFF9E4',
        'fjord-carbon': '#212121',
      },
      fontFamily: {
        display: ['Headline Gothic ATF', 'sans-serif'],
        body: ['MinionPro', 'Georgia', 'serif'],
        ui: ['Axia', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
