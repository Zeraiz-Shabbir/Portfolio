// src/components/Project3.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project3 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 3: Fantastic Tool</h2>
      <p>This is the detailed description of Project 3.</p>
      <p>Discuss features, technologies used, and user feedback here.</p>
    </div>
  );
};

export default Project3;
