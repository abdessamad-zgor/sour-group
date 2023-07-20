/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    fontFamily:{
        'dm': ["DM Serif Dispaly", 'serif'],
        sans: ["Raleway", "sans-serif"]
    }, 
    extend: {

      colors:{
          'marigold': "#EAA221",
          'babyblue': "#89cff0",
          'darkgreen': '#2b634c',
      },
    },
  },
  plugins: [],
}

