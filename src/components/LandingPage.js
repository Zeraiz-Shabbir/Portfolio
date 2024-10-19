import React from 'react';
import './LandingPage.css';
import profilePic from '../assets/headshot.jpeg';
// Importing FontAwesome icons
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Import the resume icon

const LandingPage = () => {
  const handleEmail = () => {
    window.open('mailto:zeraiz.shabbir@gmail.com', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/Zeraiz-Shabbir', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/zeraiz-shabbir/', '_blank');
  };

  const handleResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Updated-Resume-2024.pdf'; // Update with the path to your resume file
    link.download = 'Zeraiz_Shabbir_Resume.pdf'; // Name the downloaded file
    link.click();
  };

  return (
    <section id="landing-page" className="landing-page" data-scroll-section>
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="name">I'm <span className="highlight">Zeraiz Shabbir</span></h1>
          <p className="description">
          a motivated software developer dedicated to building user-friendly applications and enhancing overall user experiences.
          </p>
          <div className="social-links">
            <div className="icon-wrapper" onClick={handleEmail}>
              <FaEnvelope className="icon" />
            </div>
            <div className="icon-wrapper" onClick={handleGitHub}>
              <FaGithub className="icon" />
            </div>
            <div className="icon-wrapper" onClick={handleLinkedIn}>
              <FaLinkedin className="icon" />
            </div>
            <div className="icon-wrapper" onClick={handleResume}> {/* Add resume icon here */}
              <FaFileAlt className="icon" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={profilePic} alt="Zeraiz Shabbir" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
