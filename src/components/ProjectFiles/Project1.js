import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa';

// Import icons related to the project as React components
import { ReactComponent as FlutterIcon } from '../../assets/tiny_task/flutter.svg';
import { ReactComponent as DartIcon } from '../../assets/tiny_task/dart.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/tiny_task/firebase.svg';
import { ReactComponent as AndroidIcon } from '../../assets/tiny_task/android.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project1 = ({ onClose }) => {
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
    { IconComponent: FlutterIcon, label: 'Flutter' },
    { IconComponent: DartIcon, label: 'Dart' },
    { IconComponent: FirebaseIcon, label: 'Firebase' },
    { IconComponent: AndroidIcon, label: 'Android' },
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
        Tiny Task
      </h2>
      <p className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Daily task organizer focused on simplicity and efficacy.
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
}  

export default Project1;
