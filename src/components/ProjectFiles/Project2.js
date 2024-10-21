import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

// Import icons related to the project as React components
import { ReactComponent as JavaIcon } from '../../assets/budget_buddy/java.svg';
import { ReactComponent as XmlIcon } from '../../assets/budget_buddy/xml.svg';
import { ReactComponent as SqliteIcon } from '../../assets/budget_buddy/sqlite.svg';
import { ReactComponent as AndroidStudioIcon } from '../../assets/budget_buddy/androidstudio.svg';
import { ReactComponent as JunitIcon } from '../../assets/budget_buddy/junit5.svg';
import { ReactComponent as MaterialDesignIcon } from '../../assets/budget_buddy/materialdesign.svg';
import { ReactComponent as GradleIcon } from '../../assets/budget_buddy/gradle.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project2 = ({ onClose }) => {
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
    { IconComponent: JavaIcon, label: 'Java' },
    { IconComponent: XmlIcon, label: 'XML' },
    { IconComponent: SqliteIcon, label: 'SQLite' },
    { IconComponent: AndroidStudioIcon, label: 'Android Studio' },
    { IconComponent: JunitIcon, label: 'JUnit 5' },
    { IconComponent: MaterialDesignIcon, label: 'Material Design' },
    { IconComponent: GradleIcon, label: 'Gradle' },
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
      <div className={`back-button-wrapper ${slideBackButton ? 'slide-in-top' : 'slide-out-top'}`} onClick={handleBackButtonClick}>
        <FaArrowLeft className="back-button-icon" />
      </div>

      <h2 className={`project-title ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Budget Buddy
      </h2>
      <p className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Simple financial tracking app for daily income and expense with an option of budgeting.
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

export default Project2;
