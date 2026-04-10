import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check initial preference from localStorage or System
    const storedTheme = localStorage.getItem('selected-theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    localStorage.setItem('selected-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
