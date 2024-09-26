import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavigationCircles from './components/NavigationCircles';
import './App.css'; // Import CSS for snap scrolling

const App = () => {
  const [isVisible, setIsVisible] = useState(false); // State to toggle navbar visibility
  const [activeSection, setActiveSection] = useState('landing-page'); // State for the active section
  const [isProjectOpen, setIsProjectOpen] = useState(false); // State for project open/close
  const scrollRef = useRef(null); // Reference to the scrolling container
  const sectionsRef = useRef({}); // Ref to hold references to sections

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section based on the intersecting entry
        }
      });
    }, options);

    // Observe each section
    Object.values(sectionsRef.current).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up observer on unmount
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (isProjectOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when a project is open
    } else {
      document.body.style.overflow = ''; // Enable scrolling when no project is open
    }
  }, [isProjectOpen]);

  return (
    <div className="App" ref={scrollRef}>
      {/* Conditionally render Navbar and NavigationCircles based on whether a project is open */}
      {!isProjectOpen && (
        <>
          <Navbar
            isVisible={isVisible}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onNavigate={handleNavigate} // Pass handleNavigate to Navbar
          />
          <NavigationCircles
            onNavigate={handleNavigate}
            activeSection={activeSection}
          />
        </>
      )}
      {/* Sections */}
      <div ref={(el) => (sectionsRef.current['landing-page'] = el)} id="landing-page">
        <LandingPage />
      </div>
      <div ref={(el) => (sectionsRef.current['featured-projects'] = el)} id="featured-projects">
        <Projects onOpenProject={setIsProjectOpen} /> {/* Pass setIsProjectOpen to Projects */}
      </div>
      <div ref={(el) => (sectionsRef.current['about-me'] = el)} id="about-me">
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
