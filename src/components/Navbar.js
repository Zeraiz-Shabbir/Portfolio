import React from 'react';
import './Navbar.css';

const Navbar = ({ isVisible, onMouseEnter, onMouseLeave }) => {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    const target = document.getElementById(targetId);
    if (target) {
      // Scroll smoothly to the target section
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`Navbar ${isVisible ? 'visible' : ''}`} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <h2 className="Navbar-title">Zeraiz Shabbir</h2>
      <ul className="Navbar-menu">
        <li><a href="#featured-projects" onClick={(e) => handleSmoothScroll(e, 'featured-projects')}>Portfolio</a></li>
        <li><a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me')}>About Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
