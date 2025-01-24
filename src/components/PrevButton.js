// PrevButton.js
import React, { useState } from 'react';
import './PrevButton.css'; // Ensure to import the styles
import { FaArrowLeft } from 'react-icons/fa';

const PrevButton = ({ onClick, style }) => {
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
      className={`prev-button-wrapper ${isBouncing ? 'bounce' : ''} `} // Add hover class
      style={style}
      onClick={handleClick}
    >
      <FaArrowLeft className="prev-button-icon" />
    </div>
  );
};

export default PrevButton;
