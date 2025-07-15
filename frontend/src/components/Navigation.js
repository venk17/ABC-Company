import React from 'react';

const Navigation = ({ currentView, onViewChange }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">ABC Company</div>
          
          <nav className="nav">
            <button
              onClick={() => onViewChange('website')}
              className={`nav-link ${currentView === 'website' ? 'active' : ''}`}
            >
              Website
            </button>
            <button
              onClick={() => onViewChange('cms')}
              className={`nav-link ${currentView === 'cms' ? 'active' : ''}`}
            >
              CMS
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;