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
    {
      component: <Project1 onClose={() => handleBackButtonClick(0)} />,
      image: tiny_task_portfolio,
      url: 'https://github.com/CSC-4351-FL2024-Tuesday/SP2024Team10',
    },
    {
      component: <Project2 onClose={() => handleBackButtonClick(1)} />,
      image: budget_buddy_portfolio,
      url: 'https://github.com/Zeraiz-Shabbir/BudgetPlanner',
    },
    {
      component: <Project3 onClose={() => handleBackButtonClick(2)} />,
      image: cyberbullying_portfolio,
      url: 'https://github.com/Zeraiz-Shabbir/CyberbullyingDetectionModel',
    },
    {
      component: <Project4 onClose={() => handleBackButtonClick(3)} />,
      image: meal_match_portfolio,
      url: 'https://github.com/Zeraiz-Shabbir/MealProject',
    },
    {
      component: <Project5 onClose={() => handleBackButtonClick(4)} />,
      image: personal_portfolio,
      url: 'https://github.com/Zeraiz-Shabbir/WP_Portfolio',
    },
    {
      component: <Project6 onClose={() => handleBackButtonClick(5)} />,
      image: react_portfolio,
      url: 'https://github.com/Zeraiz-Shabbir/Portfolio',
    }
  ];

  const [animationClass, setAnimationClass] = useState(Array(projects.length).fill(''));
  const [selectedProject, setSelectedProject] = useState(null);
  const [translateY, setTranslateY] = useState(Array(projects.length).fill(0));
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [visibility, setVisibility] = useState(Array(projects.length).fill(true));
  const [selectedIndex, setSelectedIndex] = useState(null); // New state for selected index

  const handleProjectClick = (component, index, image) => {
    setAnimationClass(prev => prev.map((cls, i) => (i === index ? 'sliding-up' : '')));

    setTimeout(() => {
      setSelectedProject(component);
      setSelectedImage(image);
      setSelectedIndex(index); // Set the selected index
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
      setSelectedIndex(null); // Reset the selected index

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

      {selectedProject && selectedImage && isVisible && selectedIndex !== null && (
        <div style={{ position: 'absolute', top: '18%', left: '12%', zIndex: 20 }}>
          <div className="image-details">
            <a 
              href={projects[selectedIndex].url} // Use the URL from the projects array
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={selectedImage} 
                alt="Project Preview" 
                className={`project-image-slide ${slideUp ? 'project-image-slide-up' : ''}`}
                style={{
                  width: '250px', // Adjust size as needed
                  height: 'auto',
                }}
              />
            </a>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          }}>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
