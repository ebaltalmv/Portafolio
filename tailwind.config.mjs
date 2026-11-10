import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          950: '#060911',
          900: '#0b101d',
          850: '#101729',
          800: '#151e34',
          700: '#1e2b48',
        },
        accent: {
          cyan: '#22d3ee',
          emerald: '#10b981',
          amber: '#f59e0b',
          indigo: '#6366f1',
        },
      },
      backgroundImage: {
        'tech-grid':
          'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
    },
  },
  plugins: [typography],
};
