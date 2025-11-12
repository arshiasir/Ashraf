import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          DEFAULT: '#0A2647',
          light: '#144272',
          lighter: '#1E5A8C',
          bright: '#2E7AB8',
          accent: '#4A9FE0',
        },
        'deep-black': '#000000',
        'charcoal-gray': '#1C1C1C',
        'white-smoke': '#F5F5F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particles': 'particles 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #2E7AB8, 0 0 10px #2E7AB8, 0 0 15px #2E7AB8' },
          '100%': { boxShadow: '0 0 10px #2E7AB8, 0 0 20px #2E7AB8, 0 0 30px #2E7AB8' },
        },
        particles: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

