import React, { useEffect, useState } from 'react';
import ThemeIconLight from 'public/assets/theme-mode-light.svg';
import ThemeIconDark from 'public/assets/theme-mode-dark.svg';

const ThemeToggle: React.FC = () => {
  // Initialize theme state with a default value
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Only access localStorage on the client
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else {
      // Listen to system theme changes
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      const handler = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save new theme to local storage
      };
      darkModeMediaQuery.addEventListener('change', handler);
      return () => {
        darkModeMediaQuery.removeEventListener('change', handler);
      };
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body class and save to local storage
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save new theme to local storage
  };

  return (
    <button onClick={toggleTheme} className="mr-10">
      {theme === 'dark' ? (
        <img src={ThemeIconDark.src} alt="Dark Mode" />
      ) : (
        <img src={ThemeIconLight.src} alt="Light Mode" />
      )}
    </button>
  );
};

export default ThemeToggle;
