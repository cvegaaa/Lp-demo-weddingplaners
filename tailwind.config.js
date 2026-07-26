/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm ivory / cream backgrounds
        ivory: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F3EBDB',
          300: '#E9DCC4',
        },
        // Espresso / charcoal — primary text
        espresso: {
          400: '#6B5D52',
          500: '#4A3F37',
          600: '#3A312A',
          700: '#2B2420',
          800: '#1E1916',
        },
        // Champagne gold — primary accent
        champagne: {
          300: '#D8BC8A',
          400: '#C9A86A',
          500: '#B8935A',
          600: '#9C7A45',
          700: '#7E6136',
        },
        // Dusty rose — secondary accent
        rose: {
          300: '#E0BFB8',
          400: '#C99A8E',
          500: '#B07F73',
          600: '#92655B',
        },
        // Sage — tertiary accent for foliage/natural touches
        sage: {
          300: '#AEBDA0',
          400: '#8A9A7B',
          500: '#6E7E5F',
          600: '#556248',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'slow-zoom': 'slow-zoom 12s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
