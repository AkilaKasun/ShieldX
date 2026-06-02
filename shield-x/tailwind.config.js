/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#00F0FF', // The new light/bright gradient start
          blue: '#00AFFF', // The deeper gradient end
          dark: '#050505',
          darker: '#060912', // The deep navy background used in the sections
        }
      },
      backgroundImage: {
        // Custom utility classes to apply the gradient directly without writing 'from-x to-y' every time
        'brand-gradient-r': 'linear-gradient(to right, #00F0FF, #00AFFF)',
        'brand-gradient-br': 'linear-gradient(to bottom right, #00F0FF, #00AFFF)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          // Updated RGBA values to match the new bright cyan (#00F0FF -> 0, 240, 255)
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(0,240,255,0.4)' },
          '50%': { opacity: 0.7, boxShadow: '0 0 0 10px rgba(0,240,255,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}