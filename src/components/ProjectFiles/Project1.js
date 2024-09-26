// src/components/Project1.js
import React from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project

const Project1 = ({ onClose }) => {
  return (
    <div className="project-container">
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2>Project 1: Awesome App</h2>
      <p>This is the detailed description of Project 1.</p>
      <p>Here you can add more details, images, or any other content.</p>
    </div>
  );
};

export default Project1;
