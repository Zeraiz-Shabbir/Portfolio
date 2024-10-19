import React, { useState, useEffect } from 'react';
import './Projects.css'; // Style for the projects
import tiny_task_portfolio from '../assets/tiny_task_portfolio.png';
import budget_buddy_portfolio from '../assets/budget_buddy_portfolio.png';
import cyberbullying_portfolio from '../assets/cyberbullying_portfolio.png';
import meal_match_portfolio from '../assets/meal_match_portfolio.png';
import personal_portfolio from '../assets/personal_portfolio.png';
import react_portfolio from '../assets/react_portfolio.png';
import Project1 from './ProjectFiles/Project1';
import Project2 from './ProjectFiles/Project2';
import Project3 from './ProjectFiles/Project3';
import Project4 from './ProjectFiles/Project4';
import Project5 from './ProjectFiles/Project5';
import Project6 from './ProjectFiles/Project6';

const Projects = ({ onOpenProject }) => {
  const projects = [
    { image: tiny_task_portfolio, component: <Project1 onClose={() => handleBackButtonClick(0)} /> },
    { image: budget_buddy_portfolio, component: <Project2 onClose={() => handleBackButtonClick(1)} /> },
    { image: cyberbullying_portfolio, component: <Project3 onClose={() => handleBackButtonClick(2)} /> },
    { image: meal_match_portfolio, component: <Project4 onClose={() => handleBackButtonClick(3)} /> },
    { image: personal_portfolio, component: <Project5 onClose={() => handleBackButtonClick(4)} /> },
    { image: react_portfolio, component: <Project6 onClose={() => handleBackButtonClick(5)} /> },
  ];

  const [animationClass, setAnimationClass] = useState(Array(projects.length).fill(''));
  const [selectedProject, setSelectedProject] = useState(null);
  const [translateY, setTranslateY] = useState(Array(projects.length).fill(0));
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [visibility, setVisibility] = useState(Array(projects.length).fill(true));

  const handleProjectClick = (component, index, image) => {
    setAnimationClass(prev => prev.map((cls, i) => (i === index ? 'sliding-up' : '')));

    setTimeout(() => {
      setSelectedProject(component);
      setSelectedImage(image);
      setIsVisible(true);
      setSlideUp(false);
      onOpenProject(true);
    }, 350);
  };

  const handleBackButtonClick = (index) => {
    setSlideUp(true); // Start the slide-up animation for the image
    setAnimationClass(prev => prev.map((cls, i) => (i === index ? '' : cls)));
    setVisibility(prev => {
      const newVisibility = [...prev];
      newVisibility[index] = false;
      return newVisibility;
    });

    // Allow the slide-up animation to complete before continuing
    setTimeout(() => {
      setIsVisible(false);
      setSelectedProject(null);

      // Delay the sliding down animation until after the image has slid up
      setTimeout(() => {
        setAnimationClass(prev => prev.map((cls, i) => (i === index ? 'sliding-down' : cls)));

        setTimeout(() => {
          setTranslateY(prev => {
            const newTranslateY = [...prev];
            newTranslateY[index] = 0; 
            return newTranslateY;
          });
          setVisibility(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = true; 
            return newVisibility;
          });
        }, 10);
      }, 10); // Delay for the slide-up animation duration
      onOpenProject(false);
    }, 350); // This should match the duration of the slide-up animation
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      onOpenProject(false);
    }
  }, [selectedProject, onOpenProject]);

  return (
    <section id="featured-projects" className="projects-section" data-scroll-section>
      <div className="projects-wrapper">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-item ${animationClass[index]}`} 
              onClick={() => handleProjectClick(project.component, index, project.image)} 
              style={{ 
                visibility: visibility[index] ? 'visible' : 'hidden', 
                transform: `translateY(${translateY[index]}px)`,
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

      {selectedProject && selectedImage && isVisible && (
        <img 
          src={selectedImage} 
          alt="Project Preview" 
          className={`project-image-slide ${slideUp ? 'project-image-slide-up' : ''}`}
          style={{
            position: 'absolute',
            top: '100px', // Adjust positioning as needed
            left: 'calc(40px + 5%)', // Keep consistent margins
            zIndex: 20 // Ensure it sits above the overlay
          }}
        />
      )}
    </section>
  );
};

export default Projects;