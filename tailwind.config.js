const sharedColors = {
  current: 'currentColor',
  accent: { DEFAULT: '#2ab9d5', dark: '#7fd5e6' },
};

const colors = {
  text: {
    ...sharedColors,
    primary: { DEFAULT: '#050505', dark: '#fafafa' },
    secondary: { DEFAULT: '#303030', dark: '#d7d7d7' },
  },
  bg: {
    ...sharedColors,
    background: { DEFAULT: '#fafafa', dark: '#121212' }, // #050505
    primary: { DEFAULT: '#90f0bf', dark: '#90f0bf' },
    secondary: { DEFAULT: '#e9e6e2', dark: '#1d1a16' },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: colors.text,
    backgroundColor: colors.bg,
    borderColor: colors.bg,
    outlineColor: colors.bg,
    textDecorationColor: colors.bg,

    extend: {
      fontFamily: {
        sans: ['var(--font-tasa-orbiter-text)'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        xs: '475px',
      },

      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
