import React, { useState, useEffect } from 'react';
import './ProjectStyles.css';
import BackButton from '../BackButton';

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
  const [slideDescription, setSlideDescription] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setSlideTitle(true);
    setSlideIcons(true);
    setSlideBackButton(true);
    setSlideDescription(true);
    
    return () => {
      // Reset animations on unmount
      setSlideTitle(false);
      setSlideIcons(false);
      setSlideBackButton(false);
      setSlideDescription(false);
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
    setSlideDescription(false);
    onClose();
  };

  return (
    <div className="project-container">
      <BackButton onClick={handleBackButtonClick} slideAnimation={slideBackButton} />

      <h2 className={`project-title ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Tiny Task
      </h2>
      
      <div className={`project-description ${slideDescription ? 'slide-in-right' : 'slide-out-right'}`}>
        <p>
          Tiny Task is a productivity app developed during a Spring 2024 Software Engineering course to simplify task management. It features a clean, user-friendly interface for organizing recurring and one-time tasks, with dynamic filtering based on user preferences. Built using Dart, Flutter, and Firebase, the app emphasizes efficiency and accessibility.
        </p>
        <p>
          The project, developed by a team of five, followed Agile methodologies with work divided into sprints. Sprint 1 focused on planning and design, including wireframes, UML use cases, system design, front-end design, and back-end setup. Sprint 2 implemented core features such as login/registration, task manipulation, and task viewing. Testing was conducted on both emulators and physical devices to ensure seamless performance.
        </p>
        <p>
          Code was managed collaboratively on GitHub, with peer reviews for quality control. TinyTask was showcased at GSU's Spring 2024 Demo Day, earning praise for its intuitive design and functionality.
        </p>
      </div>
  
      <div className="tools-container">
        <h5 className={`tools-header ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`}>
          Tools and Technologies
        </h5>
        <div className={`icon-container ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`} style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
          {icons.map(({ IconComponent, label }, index) => (
            <div
              className="project-icon-wrapper"
              key={index}
            >
              <IconComponent className="icon" style={{ width: '40px', height: '40px' }} />
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project1;
