// src/components/Project2.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project2 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 2: Cool Website</h2>
      <p>This is the detailed description of Project 2.</p>
      <p>You can include screenshots, design choices, and more here.</p>
    </div>
  );
};

export default Project2;
