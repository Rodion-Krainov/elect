import React, { useState } from 'react';
import ThemeProvider from './ThemeSwitcher';
import NotificationIcon from 'public/assets/notification-icon.svg';
import LanguageIcon from 'public/assets/language-icon.svg';
import Logo from 'public/assets/university-logo.svg';
import styles from './Header.module.css';

function Header() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNotificationClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <header className="w-full bg-secondary-background dark:bg-dark-secondary-background flex justify-end items-center h-100 px-14">
      <ThemeProvider />
      <button
        className={`w-8 h-8 mr-6 ${styles['svg-icon']} ${isAnimating ? styles['rotate-animation'] : ''}`}
        onClick={handleNotificationClick}
      >
        <img src={NotificationIcon.src} alt="Notification" />
      </button>
      <button
        className={`w-100 h-10 mr-10 flex items-center justify-center border-2 border-gray-300 rounded-full ${styles['svg-icon']}`}
      >
        <img src={LanguageIcon.src} className="mr-2" alt="Language" />
        <span className="text-font dark:text-dark-font">EN</span>
      </button>
      <img src={Logo.src} alt="University Logo" />
    </header>
  );
}

export default Header;
