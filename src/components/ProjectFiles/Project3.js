import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome back arrow icon

// Import icons related to the project as React components
import { ReactComponent as SparkIcon } from '../../assets/cyberbullying/apachespark.svg';
import { ReactComponent as AzureIcon } from '../../assets/cyberbullying/azure.svg';
import { ReactComponent as DatabricksIcon } from '../../assets/cyberbullying/databricks.svg';
import { ReactComponent as KaggleIcon } from '../../assets/cyberbullying/kaggle.svg';
import { ReactComponent as GithubIcon } from '../../assets/tiny_task/github.svg';

const Project3 = ({ onClose }) => {
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
    { IconComponent: SparkIcon, label: 'Apache Spark' },
    { IconComponent: AzureIcon, label: 'Azure' },
    { IconComponent: DatabricksIcon, label: 'Databricks' },
    { IconComponent: KaggleIcon, label: 'Kaggle' },
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
        Cyberbullying Detection Model
      </h2>
      <p className={`project-description ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        ML Model capable of classifying tweets into six different categories.
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

export default Project3;
