import React, { useState, useEffect } from 'react';
import './ProjectStyles.css'; // Optional: Individual styles for the project
import BackButton from '../BackButton';

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
    setSlideDescription(false);
    onClose();
  };

  return (
    <div className="project-container">
      <BackButton onClick={handleBackButtonClick} slideAnimation={slideBackButton} />

      <h2 className={`project-title ${slideTitle ? 'slide-in-right' : 'slide-out-right'}`}>
        Cyberbullying Detection Model
      </h2>

      <div className={`project-description ${slideDescription ? 'slide-in-right' : 'slide-out-right'}`}>
        <p>
          This project focuses on developing a machine learning model to detect cyberbullying in tweets. It leverages a Kaggle dataset containing over 47,000 labeled tweets across six categories, including gender, race, religion, and others. Using cloud-based infrastructure with Apache Spark, the project processes the data through steps like tokenization, sentiment analysis, and n-gram generation to prepare it for model training.
        </p>
        <p>
          Initially, a multinomial logistic regression model was used, but after facing performance issues, the project shifted to a binary classification approach using logistic regression. The most accurate results were achieved with a Naïve Bayes algorithm, reaching 70.82% accuracy. Additionally, visualizations of unigrams and bigrams from the dataset were created to explore trends in cyberbullying language, revealing significant patterns related to gender, race, and religious harassment.
        </p>
        <p>
          This project demonstrates an effective approach to identifying and understanding online harassment, offering valuable insights for future interventions.
        </p>
      </div>

      <div className="tools-container">
        <h5 className={`tools-header ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`}>
          Tools and Technologies
        </h5>
        <div className={`icon-container ${slideIcons ? 'slide-in-left' : 'slide-out-left'}`} style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
          {icons.map(({ IconComponent, label }, index) => (
            <div className="project-icon-wrapper" key={index}>
              <IconComponent className="icon" style={{ width: '40px', height: '40px' }} />
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project3;
