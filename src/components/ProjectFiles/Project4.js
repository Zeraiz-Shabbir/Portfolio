import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

// Import icons related to the project as React components
import { ReactComponent as KotlinIcon } from '../../assets/meal_match/kotlin.svg';
import { ReactComponent as XmlIcon } from '../../assets/budget_buddy/xml.svg';
import { ReactComponent as AndroidStudioIcon } from '../../assets/budget_buddy/androidstudio.svg';
import { ReactComponent as AndroidIcon } from '../../assets/tiny_task/android.svg';
import { ReactComponent as GradleIcon } from '../../assets/budget_buddy/gradle.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project4 = ({ onClose }) => {
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
    { IconComponent: KotlinIcon, label: 'Kotlin' },
    { IconComponent: XmlIcon, label: 'XML' },
    { IconComponent: AndroidStudioIcon, label: 'Android Studio' },
    { IconComponent: AndroidIcon, label: 'Android' },
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
        Meal Match
      </h2>
      <p className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Intuitive meal-planning app designed to help people choose recipes to make based on ingredients on hand.
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

export default Project4;
