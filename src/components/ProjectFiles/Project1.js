// Project1.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

const Project1 = ({ onClose }) => {
  return (
    <div className="project-container">
      <div className="back-button-wrapper" onClick={onClose}>
        <FaArrowLeft className="back-button-icon" />
      </div>
      <h2>Project Placeholder</h2>
      {/* Additional content for the project */}
    </div>
  );
};

export default Project1;
