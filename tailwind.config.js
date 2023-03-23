/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" /* Apply Tailwind for these contents  */
  ],
  theme: {
    extend: {
      colors:{
        "blue-edited":{
          300:"#003566",
          200:"#023e8a"
        }
      },
      // font-family: 'Poppins', sans-serif;
      fontFamily:{
        'poppins' : ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}
