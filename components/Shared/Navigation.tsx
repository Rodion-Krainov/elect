import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MenuItem from 'public/assets/menu_icon.svg';
import MenuItemActive from 'public/assets/menu_icon_active.svg';
import styles from './Navigation.module.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isUserPage = router.pathname === '/user';
  const isPersInfoPage = router.pathname === '/personal-info';
  const isAdminPage = router.pathname === '/admin';
  const isSchedulePage = router.pathname === '/schedule';

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`nav w-1/12 overflow-x-hidden min-w-28 pl-60 bg-secondary-background dark:bg-dark-secondary-background flex flex-col ${isMenuOpen ? styles.full : ''}`}
    >
      <div className={`${styles.burger} flex items-center `}>
        <div
          className={`cursor-pointer ${styles.burgerMenu} flex flex-col ${isMenuOpen ? styles.open : ''}`}
          onClick={handleBurgerClick}
        >
          <div className={styles.burgerItem}></div>
          <div className={styles.burgerItem}></div>
          <div className={styles.burgerItem}></div>
        </div>
      </div>
      <div className={`${styles.holders} flex flex-col justify-between`}>
        {isUserPage ? (
          <img src={MenuItemActive.src} alt="Menu Item Active" />
        ) : (
          <img src={MenuItem.src} alt="Menu Item" />
        )}
        {isAdminPage ? (
          <img src={MenuItemActive.src} alt="Menu Item Active" />
        ) : (
          <img src={MenuItem.src} alt="Menu Item" />
        )}
        {isPersInfoPage ? (
          <img src={MenuItemActive.src} alt="Menu Item Active" />
        ) : (
          <img src={MenuItem.src} alt="Menu Item" />
        )}
        {isSchedulePage ? (
          <img src={MenuItemActive.src} alt="Menu Item Active" />
        ) : (
          <img src={MenuItem.src} alt="Menu Item" />
        )}
      </div>
      <div
        className={`${styles.submenu} flex flex-col bg-secondary-background dark:bg-dark-secondary-background`}
      >
        <div className="user-info">
          <h2 className="user-name text-category-title text-font dark:text-dark-font">
            Rodion Krainov
          </h2>
          <h2 className="user-email text-font dark:text-dark-font">
            r.krainov@innopolis.university
          </h2>
        </div>
        <ul className={styles.menuItems}>
          <li className={`text-elements ${isUserPage ? styles.current : ''}`}>
            <a
              href="/user"
              className="w-full h-full inline-block relative text-font dark:text-dark-font"
            >
              FAQ
            </a>
          </li>
          <li className={`text-elements ${isAdminPage ? styles.current : ''}`}>
            <a
              href="/admin"
              className="w-full h-full inline-block relative text-font dark:text-dark-font"
            >
              Admin Dashboard
            </a>
          </li>
          <li
            className={`text-elements ${isPersInfoPage ? styles.current : ''}`}
          >
            <a
              href="/personal-info"
              className="w-full h-full inline-block relative text-font dark:text-dark-font"
            >
              Personal Information
            </a>
          </li>
          <li
            className={`text-elements ${isSchedulePage ? styles.current : ''}`}
          >
            <a
              href="/schedule"
              className="w-full h-full inline-block relative text-font dark:text-dark-font"
            >
              Schedule
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
