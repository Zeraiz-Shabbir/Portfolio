import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

const Project4 = ({ onClose }) => {
  return (
    <div className="project-container">
      <div className="back-button-wrapper" onClick={onClose}>
        <FaArrowLeft className="back-button-icon" />
      </div>
      <h2>Meal Match</h2>
    </div>
  );
};

export default Project4;
