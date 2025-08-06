/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    // Plugins opcionales
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  // Configuración adicional para el editor
  editor: {
    preview: true
  }
}