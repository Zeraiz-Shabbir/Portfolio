// src/components/Project5.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project5 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 5: Ultimate Guide</h2>
      <p>This is the detailed description of Project 5.</p>
      <p>Highlight its key aspects and any additional notes here.</p>
    </div>
  );
};

export default Project5;
