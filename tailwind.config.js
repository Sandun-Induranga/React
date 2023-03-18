/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" /* Apply Tailwind for these contents  */
  ],
  theme: {
    extend: {
      colors:{
        "blue-edited":{
          300:"#03045e",
          200:"#023e8a"
        }
      }
    },
  },
  plugins: [],
}
