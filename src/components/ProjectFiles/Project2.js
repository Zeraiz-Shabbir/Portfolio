import React, { useState, useEffect } from 'react';
import './ProjectStyles.css';
import BackButton from '../BackButton';

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
    { IconComponent: JavaIcon, label: 'Java' },
    { IconComponent: XmlIcon, label: 'XML' },
    { IconComponent: SqliteIcon, label: 'SQLite' },
    { IconComponent: AndroidStudioIcon, label: 'Android Studio' },
    { IconComponent: JunitIcon, label: 'JUnit 5' },
    { IconComponent: MaterialDesignIcon, label: 'Material Design' },
    { IconComponent: GradleIcon, label: 'Gradle' },
    { IconComponent: GithubIcon, label: 'GitHub' },
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
        Budget Buddy
      </h2>

      <div className={`project-description ${slideDescription ? 'slide-in-right' : 'slide-out-right'}`}>
        <p>
          Budget Buddy is a mobile app designed to simplify expense and income tracking, providing users with a clean and intuitive way to manage their finances. It features personalized forms for data entry, monthly budgeting limits, and savings tracking, all powered by a robust SQLite database and back-end implementation.
        </p>
        <p>
          Developed by a team of three during a Fall 2024 Mobile App Development course, the project followed a structured workflow. Sprint 1 focused on planning and design, including front-end and back-end setup, while Sprint 2 implemented core features such as login/registration, budget tracking, and expense manipulation. Testing was conducted to ensure smooth functionality on Android Studio emulators.
        </p>
        <p>
          Version control and collaboration were managed through GitHub, with thorough peer reviews to maintain code quality. Budget Buddy is an example of efficient teamwork and practical application of mobile development skills.
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

export default Project2;
