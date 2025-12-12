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
          50: '#FAF8F5',
          100: '#F5F1E8',
          200: '#EBE3D5',
          300: '#DDD1BA',
          400: '#C9B89A',
          500: '#B5A080',
          600: '#A08866',
          700: '#8B7355',
          800: '#6B5742',
          900: '#1A1614',
        },
        accent: {
          50: '#F7F3EF',
          100: '#EDE6DD',
          200: '#DBC9B9',
          300: '#C9AC95',
          400: '#B78F71',
          500: '#8B7355',
          600: '#6B5742',
          700: '#54442F',
          800: '#3D311F',
          900: '#261E10',
        },
        luxury: {
          gold: '#D4AF37',
          sage: '#9CAF88',
          rose: '#E8D5D0',
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
