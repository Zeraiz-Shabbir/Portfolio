// src/components/Project4.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project4 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 4: Innovative Solution</h2>
      <p>This is the detailed description of Project 4.</p>
      <p>Explain the problem it solves and how it works here.</p>
    </div>
  );
};

export default Project4;
