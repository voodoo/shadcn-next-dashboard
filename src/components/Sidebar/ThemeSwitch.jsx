import React, { useContext } from 'react';
import { ThemeContext } from '../Dashboard/Dashboard';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <button 
        className="theme-switch" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
      >
        {isDarkTheme ? (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="theme-icon"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="theme-icon"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch; 