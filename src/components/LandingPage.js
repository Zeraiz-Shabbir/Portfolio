import React from 'react';
import './LandingPage.css';
import profilePic from '../assets/cali_pic.jpg';
// Importing FontAwesome icons
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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

  return (
    <section id="landing-page" className="landing-page" data-scroll-section>
      <div className="content-wrapper">
        <div className="text-section">
          {/* <h1 className="greeting">Hi</h1> */}
          <h1 className="name">I'm <span className="highlight">Zeraiz Shabbir</span></h1> {/* Change here */}
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
