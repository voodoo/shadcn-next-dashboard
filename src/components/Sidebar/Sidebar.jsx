import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeSwitch from './ThemeSwitch';
import './Sidebar.css';

const Sidebar = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="#dashboard">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Overview
              </a>
            </li>
            <li>
              <a href="#projects">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a href="#tasks">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
                Tasks
              </a>
            </li>
          </ul>
        </nav>

        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Sidebar; 