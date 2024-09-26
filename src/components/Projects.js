import React, { useState, useEffect } from 'react';
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: tiny_task_portfolio,
      component: <Project1 onClose={() => setSelectedProject(null)} />
    },
    {
      image: budget_buddy_portfolio,
      component: <Project2 onClose={() => setSelectedProject(null)} />
    },
    {
      image: cyberbullying_portfolio,
      component: <Project3 onClose={() => setSelectedProject(null)} />
    },
    {
      image: meal_match_portfolio,
      component: <Project4 onClose={() => setSelectedProject(null)} />
    },
    {
      image: personal_portfolio,
      component: <Project5 onClose={() => setSelectedProject(null)} />
    },
  ];

  const handleProjectClick = (component) => {
    setSelectedProject(component);
    onOpenProject(true); // Notify parent to hide nav elements
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling again
      onOpenProject(false); // Notify parent to show nav elements
    }
  }, [selectedProject, onOpenProject]);

  return (
    <section id="featured-projects" className="projects-section" data-scroll-section>
      <div className="projects-wrapper">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-item" 
              onClick={() => handleProjectClick(project.component)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              {project.title}
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
