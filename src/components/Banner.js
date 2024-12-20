import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <nav className="navbar">
        <div className="navbar-content">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <button className="quote-button">Get A Quote</button>
        </div>
      </nav>
      <div className="banner-content">
        <h1>Big Opportunity For Your Business</h1>
        <div className="banner-buttons">
          <button className="banner-button">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner; 