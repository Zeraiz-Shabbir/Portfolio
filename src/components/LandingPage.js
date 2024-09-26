import React from 'react';
import './LandingPage.css';
import profilePic from '../assets/cali_pic.jpg';

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
          <h1>Hi,</h1>
          <h1>I'm Zeraiz Shabbir</h1>
          <p>an aspiring Frontend Developer</p>
          <div className="social-links">
            <button onClick={handleEmail}>Email</button>
            <button onClick={handleGitHub}>GitHub</button>
            <button onClick={handleLinkedIn}>LinkedIn</button>
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
