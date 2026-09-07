/* Base masthead styles */
.masthead {
  background-color: #313235;
  color: #F9F9FA;
  font-family: "Source Sans 3", sans-serif;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #55595E;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
}

/* Logo styles */
.logoContainer {
  display: flex;
  align-items: center;
  gap: 16px;
}

.geLogo {
  width: 144px;
  height: 32px;
  color: #B39CF1;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.divider {
  width: 0;
  height: 24px;
  border-right: 1px solid #BABDC0;
}

.locationText {
  color: #BABDC0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}

/* Utility icons container */
.utilityIcons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.settingsIcon {
  width: 24px;
  height: 24px;
  color: #F9F9FA;
}

.userInfo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #F9F9FA;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}

.timestampContainer {
  position: absolute;
  right: 177px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  color: #F9F9FA;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.date {
  margin-bottom: 4px;
}

.time {
  margin-top: 4px;
}
import React from 'react';
import styles from './Masthead.module.css';

interface MastheadProps {
  darkMode?: boolean;
  location?: string;
  timestamp?: string;
  date?: string;
  batteryLevel?: string;
}

// SVG Icon components based on Figma design system
const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function Masthead({
  darkMode = true,
  location = 'Northwest Ward',
  timestamp = '01:05',
  date = '23 Dec 2023',
  batteryLevel = '100%'
}: MastheadProps) {
  return (
    <header 
      className={styles.masthead}
      data-node-id="13:1546"
      role="banner"
      aria-label="Main navigation"
    >
      <div className={styles.logoContainer}>
        <div className={styles.geLogo}>GE Healthcare</div>
        <div className={styles.divider}></div>
        <div className={styles.locationText}>{location}</div>
      </div>
      
      <div className={styles.timestampContainer}>
        <div className={styles.date}>{date}</div>
        <div className={styles.time}>{timestamp}</div>
      </div>

      <div className={styles.utilityIcons}>
        <button 
          className={styles.settingsIcon} 
          aria-label="Settings"
          type="button"
        >
          <SettingsIcon />
        </button>
        
        <div className={styles.userInfo}>
          <UserIcon />
          <span>{batteryLevel}</span>
        </div>
      </div>
    </header>
  );
}