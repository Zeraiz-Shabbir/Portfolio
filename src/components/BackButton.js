// BackButton.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './BackButton.css'; // Ensure to import the styles

const BackButton = ({ onClick, slideAnimation }) => {
  return (
    <div className={`back-button-wrapper ${slideAnimation ? 'slide-in-top' : 'slide-out-top'}`} onClick={onClick}>
      <FaArrowLeft className="back-button-icon" />
    </div>
  );
};

export default BackButton;