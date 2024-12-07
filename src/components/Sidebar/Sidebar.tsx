'use client';

import React, { useContext } from 'react';
import './Sidebar.css';
import { ThemeContext } from '../Dashboard/Dashboard';

const Sidebar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Gradient Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>

      <aside className="sidebar">
        {/* Organization Header */}
        <div className="org-header">
          <div className="org-info">
            <div className="org-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#4F46E5" />
                <path d="M20 12v16M12 20h16" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="org-details">
              <h1>Acme Inc</h1>
              <span>Enterprise</span>
            </div>
          </div>
          <button className="expand-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Platform Section */}
        <div className="sidebar-section">
          <h2>Platform</h2>
          <nav>
            <div className="nav-group">
              <button className="nav-item active">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Playground</span>
                <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <div className="sub-nav">
                <a href="#" className="nav-item">History</a>
                <a href="#" className="nav-item">Starred</a>
                <a href="#" className="nav-item">Settings</a>
              </div>
            </div>
            <button className="nav-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Models</span>
            </button>
            <button className="nav-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Documentation</span>
            </button>
            <button className="nav-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Projects Section */}
        <div className="sidebar-section">
          <h2>Projects</h2>
          <nav>
            <button className="nav-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Design Engineering</span>
            </button>
          </nav>
        </div>

        {/* Appearance Section */}
        <div className="sidebar-section theme-section">
          <h2>Appearance</h2>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-icon">
              {isDarkTheme ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </div>
            <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="user-info">
            <div className="avatar">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#E5E7EB" />
                <path 
                  d="M16 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="user-details">
              <span className="username">shadcn</span>
              <span className="email">m@example.com</span>
            </div>
          </div>
          <button className="expand-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 