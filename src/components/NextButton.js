// NextButton.js
import React, { useState } from 'react';
import './NextButton.css'; // Ensure to import the styles
import { FaArrowRight } from 'react-icons/fa';

const NextButton = ({ onClick, style }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    // Trigger bounce animation
    setIsBouncing(true);
    onClick();

    // Remove bounce class after animation duration
    setTimeout(() => {
      setIsBouncing(false);
    }, 300); // Match this duration with your bounce animation
  };

  return (
    <div
      className={`next-button-wrapper ${isBouncing ? 'bounce' : ''} `} // Add hover class
      style={style}
      onClick={handleClick}
    >
      <FaArrowRight className="next-button-icon" />
    </div>
  );
};

export default NextButton;
