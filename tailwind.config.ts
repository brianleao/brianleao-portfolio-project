import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'large': '2560px',
    },
    extend: {
      keyframes: {},
      animation: {},
      colors: {
        'border-dark': 'rgb(22, 22, 22)',
        'greenPantano': '#71AA1D',
      },
      textColor: {
        'greenPantano': '#71AA1D',
      },
    },
  },
  plugins: [],
};

export default config;
