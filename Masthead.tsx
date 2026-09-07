/* Base masthead styles */
.masthead {
  background-color: #F9F9FA;
  color: #313235;
  font-family: "Source Sans 3", sans-serif;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #D1D2D4;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

/* Size variations */
.small {
  height: 48px;
}

.medium {
  height: 56px;
}

.large {
  height: 64px;
}

/* Logo styles */
.logo {
  color: #7252BC;
  font-weight: 600;
  text-decoration: none;
}

.logo.small {
  font-size: 18px;
}

.logo.large {
  font-size: 20px;
}

/* Navigation styles */
.navList {
  display: flex;
  gap: 24px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Utility icons container */
.utilityIcons {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Icon button styles */
.iconButton {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #313235;
}
import React from 'react';
import styles from './Masthead.module.css';

interface MastheadProps {
  overflowMenu?: boolean;
  hamburger?: boolean;
  status?: boolean;
  notification?: boolean;
  navigationButtons?: boolean;
  utilityIcons?: boolean;
  screenSize?: 'Small' | 'Medium' | 'Large';
  darkMode?: boolean;
}

// SVG Icon components based on Figma design system
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const StatusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

export default function Masthead({
  overflowMenu = true,
  hamburger = false,
  status = false,
  notification = false,
  navigationButtons = true,
  utilityIcons = true,
  screenSize = 'Large',
  darkMode = false
}: MastheadProps) {
  const sizeClass = screenSize.toLowerCase() as 'small' | 'medium' | 'large';
  
  return (
    <header 
      className={`${styles.masthead} ${styles[sizeClass]}`}
      data-node-id="1:2161"
      role="banner"
      aria-label="Main navigation"
    >
      <a href="/" className={`${styles.logo} ${styles[`${sizeClass}`]}`} aria-label="Brand home">
        Brand Logo
      </a>
      
      {navigationButtons && (
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      )}
      
      <div className={styles.utilityIcons}>
        {utilityIcons && (
          <>
            {status && (
              <button 
                className={styles.iconButton} 
                aria-label="Status"
                type="button"
              >
                <StatusIcon />
              </button>
            )}
            {notification && (
              <button 
                className={styles.iconButton} 
                aria-label="Notifications"
                type="button"
              >
                <NotificationIcon />
              </button>
            )}
          </>
        )}
        
        {overflowMenu && (
          <button 
            className={styles.iconButton} 
            aria-label="Menu"
            type="button"
          >
            <MenuIcon />
          </button>
        )}
      </div>
    </header>
  );
}