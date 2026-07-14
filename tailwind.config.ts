import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        asphalt: '#080A0E',
        graphite: '#111722',
        signal: '#F04423',
        copper: '#F59E0B',
        steel: '#9CA3AF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(240, 68, 35, 0.24)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'radial-signal': 'radial-gradient(circle at top right, rgba(240, 68, 35, 0.28), transparent 36rem)',
        'metal-line': 'linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.02))',
      },
    },
  },
  plugins: [],
};

export default config;
