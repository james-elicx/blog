'use client';

import { useTheme } from 'next-themes';

import { Moon, Sun } from '../icons';

export { ThemeProvider } from 'next-themes';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      type="button"
      title="Toggle theme"
      className="text-primary transition-all hover:text-accent dark:text-primary-dark dark:hover:text-accent-dark"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Moon size={28} className="block dark:hidden" />
      <Sun size={28} className="hidden dark:block" />
    </button>
  );
};
