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
      <p className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Initial portfolio website focused on functionality.
      </p>
  
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
