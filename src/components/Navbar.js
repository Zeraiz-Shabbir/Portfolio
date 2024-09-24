import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h2 className="Navbar-title">Zeraiz Shabbir</h2>
      <ul className="Navbar-menu">
        <li><a href="#web-projects">Web Projects</a></li>
        <li><a href="#mobile-app-projects">Mobile App Projects</a></li>
        <li><a href="#cloud-computing">Cloud Computing</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
