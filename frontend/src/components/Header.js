import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">ABC Company</div>
          
          <nav className="nav">
            <a href="#about" className="nav-link active">About</a>
            <a href="#services" className="nav-link">Services</a>
          </nav>
          
          <div className="mobile-menu">
            <button className="mobile-menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;