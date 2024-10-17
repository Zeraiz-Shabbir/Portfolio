import React, { useState, useEffect, useRef } from 'react';
import './Projects.css'; // Style for the projects
import tiny_task_portfolio from '../assets/tiny_task_portfolio.png';
import budget_buddy_portfolio from '../assets/budget_buddy_portfolio.png';
import cyberbullying_portfolio from '../assets/cyberbullying_portfolio.png';
import meal_match_portfolio from '../assets/meal_match_portfolio.png';
import personal_portfolio from '../assets/personal_portfolio.png';
import Project1 from './ProjectFiles/Project1';
import Project2 from './ProjectFiles/Project2';
import Project3 from './ProjectFiles/Project3';
import Project4 from './ProjectFiles/Project4';
import Project5 from './ProjectFiles/Project5';

const Projects = ({ onOpenProject }) => {
  const projects = [
    { image: tiny_task_portfolio, component: <Project1 onClose={() => handleBackButtonClick(0)} /> },
    { image: budget_buddy_portfolio, component: <Project2 onClose={() => handleBackButtonClick(1)} /> },
    { image: cyberbullying_portfolio, component: <Project3 onClose={() => handleBackButtonClick(2)} /> },
    { image: meal_match_portfolio, component: <Project4 onClose={() => handleBackButtonClick(3)} /> },
    { image: personal_portfolio, component: <Project5 onClose={() => handleBackButtonClick(4)} /> },
  ];

  const [animationClass, setAnimationClass] = useState(Array(projects.length).fill(''));
  const [selectedProject, setSelectedProject] = useState(null);
  const [translateY, setTranslateY] = useState([0, 0, 0, 0, 0]);
  const projectsRef = useRef(null);

  const handleMouseEnter = (index) => {
    setTranslateY(prev => {
      const newTranslateY = [...prev];
      newTranslateY[index] = -50; // Move the card up
      return newTranslateY;
    });
  };

  const handleMouseLeave = (index) => {
    setTranslateY(prev => {
      const newTranslateY = [...prev];
      newTranslateY[index] = 0; // Reset the card's position
      return newTranslateY;
    });
  };

  const handleProjectClick = (component, index) => {
    // Set animation class for the clicked card
    setAnimationClass(prev => prev.map((cls, i) => (i === index ? 'sliding-up' : '')));
    setSelectedProject(component);
    onOpenProject(true);
  };

  const handleBackButtonClick = (index) => {
    // Dismiss project screen and reset animation for the clicked card only
    setSelectedProject(null);
    setAnimationClass(prev => prev.map((cls, i) => (i === index ? 'sliding-down' : ''))); // Apply downward animation
    onOpenProject(false);

    // Reset the animation class for the card after it slides down
    setTimeout(() => {
      setAnimationClass(prev => prev.map((cls, i) => (i === index ? '' : cls))); // Clear animation class for hovered functionality
    }, 300); // Adjust the timing according to your sliding-down duration
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = ''; // Allow scrolling
      onOpenProject(false);
    }
  }, [selectedProject, onOpenProject]);

  return (
    <section id="featured-projects" className="projects-section" data-scroll-section>
      <div className="projects-wrapper" ref={projectsRef}>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-item ${animationClass[index]}`} 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={() => handleMouseLeave(index)} 
              onClick={() => handleProjectClick(project.component, index)}
              style={{ 
                transform: `translateY(${translateY[index]}px) scale(${translateY[index] < 0 ? 1.12 : 1})`,
                transition: 'transform 0.3s ease' 
              }}
            >
              <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-details-overlay">
          {selectedProject}
        </div>
      )}
    </section>
  );
};

export default Projects;
