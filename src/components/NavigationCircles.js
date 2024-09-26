import React from 'react';
import './NavigationCircles.css';

const NavigationCircles = ({ onNavigate, activeSection }) => {
  return (
    <div className="nav-circles">
      <div
        className={`circle ${activeSection === 'landing-page' ? 'active' : ''}`} // Add active class
        onClick={() => onNavigate('landing-page')}
      >
        <span className="tooltip">Landing</span>
      </div>
      <div
        className={`circle ${activeSection === 'featured-projects' ? 'active' : ''}`} // Add active class
        onClick={() => onNavigate('featured-projects')}
      >
        <span className="tooltip">Projects</span>
      </div>
      <div
        className={`circle ${activeSection === 'about-me' ? 'active' : ''}`} // Add active class
        onClick={() => onNavigate('about-me')}
      >
        <span className="tooltip">About Me</span>
      </div>
    </div>
  );
};

export default NavigationCircles;
