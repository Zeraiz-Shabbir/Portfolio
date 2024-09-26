import React, { useState } from 'react';
import './Projects.css'; // Style for the projects
import Project1 from './ProjectFiles/Project1';
import Project2 from './ProjectFiles/Project2';
import Project3 from './ProjectFiles/Project3';
import Project4 from './ProjectFiles/Project4';
import Project5 from './ProjectFiles/Project5';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: 'Project 1', component: <Project1 onClose={() => setSelectedProject(null)} /> },
    { title: 'Project 2', component: <Project2 onClose={() => setSelectedProject(null)} /> },
    { title: 'Project 3', component: <Project3 onClose={() => setSelectedProject(null)} /> },
    { title: 'Project 4', component: <Project4 onClose={() => setSelectedProject(null)} /> },
    { title: 'Project 5', component: <Project5 onClose={() => setSelectedProject(null)} /> },
  ];

  const handleProjectClick = (component) => {
    setSelectedProject(component);
  };

  return (
    <section id="featured-projects" className="projects-section" data-scroll-section>
      {/* <h2>Featured Projects</h2> */}
      <div className="projects-wrapper">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-item" 
              onClick={() => handleProjectClick(project.component)}
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="project-details-overlay" onClick={() => setSelectedProject(null)}>
          {selectedProject}
        </div>
      )}
    </section>
  );
};

export default Projects;
