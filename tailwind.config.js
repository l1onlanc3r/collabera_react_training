/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./MyTodo/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
