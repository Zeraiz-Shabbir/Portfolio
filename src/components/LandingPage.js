import React from 'react';
import './LandingPage.css';
import profileImage from '../assets/headshot.jpeg'; // Fixed the missing closing quote

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <img src={profileImage} alt="Zeraiz Shabbir" className="Landing-image" />
      <h1>Hello, I am Zeraiz Shabbir</h1>
      <div className="Landing-buttons">
        <a href="#about-me" className="Landing-button">About Me</a>
        <a href="#contact" className="Landing-button">Contact Me</a>
      </div>
    </div>
  );
};

export default LandingPage;
