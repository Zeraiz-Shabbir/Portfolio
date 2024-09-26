import React from 'react';
import './NavigationCircles.css';

const NavigationCircles = ({ onNavigate }) => {
  return (
    <div className="nav-circles">
      <div className="circle" onClick={() => onNavigate('landing-page')}>
        <span className="tooltip">Landing</span>
      </div>
      <div className="circle" onClick={() => onNavigate('featured-projects')}>
        <span className="tooltip">Projects</span>
      </div>
      <div className="circle" onClick={() => onNavigate('about-me')}>
        <span className="tooltip">About Me</span>
      </div>
    </div>
  );
};

export default NavigationCircles;
