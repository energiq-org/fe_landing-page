/** @type {import('tailwindcss').Config} */
import motion from "tailwindcss-motion";
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1536px',
        '2xl': '1848px',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        playwrite: ['"Playwrite DE Grund"', 'cursive'],
        roboto: ['"Roboto"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        horizontalScrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        horizontalScrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideWords: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
        textslide: {
          '0%, 20%': {
            transform: 'translateY(0%)',
        },
        '25%, 45%': {
            transform: 'translateY(-20%)',
        },
        '50%, 70%': {
            transform: 'translateY(-40%)',
        },
        '75%, 95%': {
            transform: 'translateY(-60%)',
        },                            
        '100%': {
            transform: 'translateY(-80%)',
        },
      },
      },
      animation: {
        horizontalScrollLeft: 'horizontalScrollLeft 20s linear infinite',
        horizontalScrollRight: 'horizontalScrollRight 30s linear infinite',
        textSlide : 'textslide 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        
      },
      // keyframes: {
      //   horizontalScrollLeft:{
      //     to: { transform: 'translate(calc(-50% - 0.5rem))'},
      //   },
      //   horizontalScrollRight:{
      //     to: { transform: 'translate(calc(-50% - 0.5rem))'},
      //   }
      // },
      // animation:{
      //   horizontalScrollLeft:"horizontalScrollLeft 10s linear infinite forwards",
      //   horizontalScrollRight:"horizontalScrollRight 20s linear infinite reverse",
      // }
    },
  },
  plugins: [
    motion,
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-stroke-orange': {
          '-webkit-text-stroke': '4px #BF4E30',
          color: 'transparent',
        },
        '.text-stroke-lightOrg': {
          '-webkit-text-stroke': '3px #BF4E30',
          color: 'transparent',
        },
        '.clip-angled-button': {
          '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 100%, 33% 100%, 0 69%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 33% 100%, 0 69%)',
        },
      });
    }),
  ],
};


