import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import BackButton from '../BackButton';

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
      <BackButton onClick={handleBackButtonClick} slideAnimation={slideBackButton} />

      <h2 className={`project-title ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Meal Match
      </h2>
      <div className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        <p>
          Meal Match is an intuitive meal-planning Android app designed to assist users in choosing recipes based on the ingredients they have at home. Developed during the Summer 2023 semester as part of the Programming Language Concepts class, the app was built using Java and Android Studio.
        </p>

        <p>
          This project marked my first foray into Android app development. It involved learning key concepts like app architecture, UI/UX design, and how to manage application states effectively. The app utilizes Kotlin for the user interface, XML for layout and design, and Android Studio as the primary IDE for development. I also gained practical experience working with APIs to retrieve recipe data and display it within the app.
        </p>

        <p>
          During the development process, I had the opportunity to optimize the Android emulator, ensuring smooth performance during testing. Additionally, I worked in a team of three, which enhanced my skills in collaboration and communication, especially when managing tasks such as debugging, UI design, and implementing core features.
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

export default Project4;
