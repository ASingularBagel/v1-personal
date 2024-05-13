import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      }, 
      height: {
        sidepanel: 'calc(100vh - 4rem)',
      }, 
      backgroundImage: {
        
      }
    },
  },
  daisyui: {
    themes: [
      "sunset", 
      "dim", 
      "dracula", 
      "dark", 
      "light", 
      "black", 
      "luxury"
    ]
  },
  plugins: [
    daisyui, 
  ],
}

