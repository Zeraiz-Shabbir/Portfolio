import React from 'react';
import './Navbar.css';
import { FaCog } from 'react-icons/fa'; // Import settings icon

const Navbar = ({ isVisible, onMouseEnter, onMouseLeave, onOpenSettings }) => {
  // const handleSmoothScroll = (event, targetId) => {
  //   event.preventDefault(); // Prevent the default anchor click behavior
  //   const target = document.getElementById(targetId);
  //   if (target) {
  //     // Scroll smoothly to the target section
  //     target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  return (
    <nav 
      className={`Navbar ${isVisible ? 'visible' : ''}`} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <h2 className="Navbar-title">Zeraiz Shabbir</h2>
      <div className="icon-wrapper" onClick={onOpenSettings}>
        <FaCog className="icon settings-button" />
        <div className="UnfoldingLine"></div>
      </div>
    </nav>
  );
};

export default Navbar;
