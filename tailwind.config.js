/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue':'#0278AE',
      'lightdark': '#0000006e',
      'gray': '#6b7280',
      'lightorange': '#ffa500',
      'orangeshadow': '#b86b3930',
      'orange': '#FF9A03',
      'lightgrey': '#F7F5F5',
      'lightgray': '#807b7b',
      'lightblue':'#E3F0F6',
      'hoverColor':'#6CB1D0'
      
    },

    fontSize:{
    'norm':'15px'
    },
    extend: {
      width: {
        'norm': '90%',
        'mid':'60%'
      },
      margin:{
       '100':'400px'
      },
      boxshadow:{
         'orange':'0 1px 3px 0 rgba(184, 107, 57, 0.188)'
      }
    },
  },
  plugins: [],
}

