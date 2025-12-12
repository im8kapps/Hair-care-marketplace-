import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8FC',
          100: '#F9F0F7',
          200: '#F3E1EF',
          300: '#EDD2E7',
          400: '#E7C3DF',
          500: '#D4A5CC',
          600: '#C187B9',
          700: '#AE69A6',
          800: '#8B5184',
          900: '#1A1614',
        },
        accent: {
          50: '#FCF4FA',
          100: '#F9E9F5',
          200: '#F3D3EB',
          300: '#EDBDE1',
          400: '#E7A7D7',
          500: '#DA6FC4',
          600: '#CD37B1',
          700: '#A62D8E',
          800: '#7F236B',
          900: '#581948',
        },
        luxury: {
          pink: '#E7A7D7',
          purple: '#CD37B1',
          lavender: '#EDD2E7',
          silver: '#C0C0C0',
          gray: '#8B8B8B',
        },
        semantic: {
          success: '#7A9D7A',
          error: '#C67676',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'ken-burns': 'kenBurns 20s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
