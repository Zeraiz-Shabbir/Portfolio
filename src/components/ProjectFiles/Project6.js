import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import BackButton from '../BackButton';

// Import icons related to the project as React components
import { ReactComponent as JavascriptIcon } from '../../assets/portfolio/javascript.svg';
import { ReactComponent as CssIcon } from '../../assets/react_portfolio/css3.svg';
import { ReactComponent as HtmlIcon } from '../../assets/react_portfolio/html5.svg';
import { ReactComponent as ReactIcon } from '../../assets/react_portfolio/react.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project6 = ({ onClose }) => {
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
    { IconComponent: CssIcon, label: 'CSS' },
    { IconComponent: HtmlIcon, label: 'HTML' },
    { IconComponent: ReactIcon, label: 'React' },
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
        Code Portfolio
      </h2>
      <div className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
      <p>
        This portfolio project is built using JavaScript, CSS, HTML, and React to showcase my skills and projects in a dynamic and user-friendly manner. The website is designed to highlight my work, with an emphasis on clean code, responsive design, and interactive features.
      </p>

      <p>
        React is used to build a seamless, component-based structure, while CSS and HTML are used for styling and layout. GitHub is leveraged for version control as well as the actual hosting of the site, and the ability to track and manage changes throughout the development process.
      </p>

      <p>
        This portfolio not only serves as a showcase for my technical abilities but also provides me with an opportunity to demonstrate best practices in web development, including component reuse, state management, and modern JavaScript workflows.
      </p>
    </div>
  
      {/* Tools section wrapper for easier styling */}
      <div className="tools-container">
        <h5 className={`tools-header ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`}>
          Tools and Technologies Used:
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

export default Project6;
