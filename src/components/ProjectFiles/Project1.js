// src/components/Project1.js
import React from 'react';

import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project1 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 1</h2>
    </div>
  );
};

export default Project1;
