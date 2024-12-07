import React, { useState, useEffect, createContext, useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import './Dashboard.css';

export const ThemeContext = createContext();

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`dashboard-container ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>

        <div className="dashboard">
          <header className="dashboard-header">
            <div>
              <span className="greeting">{greeting}</span>
              <h1>Project Dashboard</h1>
            </div>
            <div className="dashboard-actions">
              <button className="btn-primary">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  style={{ marginRight: '8px' }}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                New Project
              </button>
              <button className="btn-secondary">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  style={{ marginRight: '8px' }}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                New Task
              </button>
            </div>
          </header>
          
          <div className="dashboard-content">
            <div className="dashboard-column">
              <ProjectList />
            </div>
            <div className="dashboard-column">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Dashboard; 