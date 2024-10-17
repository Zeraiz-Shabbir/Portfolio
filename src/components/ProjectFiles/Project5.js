import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

const Project5 = ({ onClose }) => {
  return (
    <div className="project-container">
      <div className="back-button-wrapper" onClick={onClose}>
        <FaArrowLeft className="back-button-icon" />
      </div>
      <h2>Project Placeholder</h2>
    </div>
  );
};

export default Project5;
