import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import BackButton from '../BackButton';

// Import icons related to the project as React components
import { ReactComponent as JavascriptIcon } from '../../assets/portfolio/javascript.svg';
import { ReactComponent as PhpMyAdminIcon } from '../../assets/portfolio/phpmyadmin.svg';
import { ReactComponent as PhpIcon } from '../../assets/portfolio/php.svg';
import { ReactComponent as WordpressIcon } from '../../assets/portfolio/wordpress.svg';
import { ReactComponent as AwsIcon } from '../../assets/portfolio/amazonec2.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project5 = ({ onClose }) => {
  const [slideTitle, setSlideTitle] = useState(false);
  const [slideIcons, setSlideIcons] = useState(false);
  const [slideBackButton, setSlideBackButton] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setSlideTitle(true);
    setSlideIcons(true);
    setSlideBackButton(true);
    
    return () => {
      // Reset animations on unmount
      setSlideTitle(false);
      setSlideIcons(false);
      setSlideBackButton(false);
    };
  }, []);

  const icons = [
    { IconComponent: JavascriptIcon, label: 'JavaScript' },
    { IconComponent: PhpMyAdminIcon, label: 'PHPMyAdmin' },
    { IconComponent: PhpIcon, label: 'PHP' },
    { IconComponent: WordpressIcon, label: 'WordPress' },
    { IconComponent: AwsIcon, label: 'AWS' },
    { IconComponent: GithubIcon, label: 'GitHub' }
  ];

  const handleBackButtonClick = () => {
    setSlideTitle(false);
    setSlideIcons(false);
    setSlideBackButton(false);
    onClose();
  };

  return (
    <div className="project-container">
      <BackButton onClick={handleBackButtonClick} slideAnimation={slideBackButton} />

      <h2 className={`project-title ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Personal Portfolio
      </h2>
      <div className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        <p>
          Personal Portfolio WP is a WordPress-based website designed to showcase my projects and skills. Built using WordPress, phpMyAdmin, and a variety of plugins, this site features a custom search functionality powered by Ajax, which dynamically updates the page without refreshing when searching for a project.
        </p>

        <p>
          The site utilizes plugins like Elementor for page layout, Contact Form 7 for communication, and Profile Builder for user registration and login management. I also created the custom Search Optimizer plugin, which enhances the search experience by providing real-time feedback on project queries.
        </p>

        <p>
          I deployed the website on AWS using an EC2 instance, gaining valuable experience in server management, database handling via phpMyAdmin, and WordPress plugin development. This project allowed me to enhance my skills in JavaScript, PHP, and server-side management while creating a professional portfolio to help further my career.
        </p>
      </div>
  
      {/* Tools section wrapper for easier styling */}
      <div className="tools-container">
        <h5 className={`tools-header ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`}>
          Tools and Technologies
        </h5>
        <div className={`icon-container ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`} style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
          {icons.map(({ IconComponent, label }, index) => (
            <div className="project-icon-wrapper" key={index}>
              <IconComponent 
                className="icon" 
                style={{ width: '40px', height: '40px' }} 
              />
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project5;
