import React, { useState, useEffect } from 'react';
import './NavigationCircles.css';

const NavigationCircles = ({ onNavigate, activeSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [lastActiveSection, setLastActiveSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const sections = ['landing-page', 'featured-projects', 'about-me'];

  // Handle mouse enter
  const handleMouseEnter = (section) => {
    if (!isNavigating) { // Only expand if not navigating
      setHoveredSection(section);
      setExpandedSection(section);
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredSection(null);
    setExpandedSection(null); // Dismiss immediately on mouse leave
  };

  // Handle navigation on click
  const handleNavigation = (section) => {
    setIsNavigating(true); // Set navigating flag
    setExpandedSection(section); // Expand the clicked section
    onNavigate(section);
    setLastActiveSection(section);

    // Reset state after navigation
    setHoveredSection(null);
    setTimeout(() => {
      setExpandedSection(null); // Reset expanded section
      setIsNavigating(false); // Reset navigating flag
    }, 500); // Adjust this delay as needed to ensure navigation completes
  };

  // Use an IntersectionObserver to track when sections come into view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isNavigating) { // Only expand if not navigating
          const section = entry.target.id;
          if (section !== lastActiveSection) {
            setExpandedSection(section);
            setLastActiveSection(section);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, lastActiveSection, isNavigating]);

  // Handle the expanded section timeout
  useEffect(() => {
    if (expandedSection) {
      const timeoutId = setTimeout(() => {
        setExpandedSection(null); // Dismiss the expanded section
      }, 1000);

      return () => clearTimeout(timeoutId); // Clear timeout on unmount or state change
    }
  }, [expandedSection]);

  return (
    <div className="nav-circles">
      {sections.map((section) => (
        <div
          key={section}
          className="circle"
          style={{
            width: expandedSection === section || hoveredSection === section ? 110 : 20,
            height: expandedSection === section || hoveredSection === section ? 35 : 20,
            borderRadius: expandedSection === section || hoveredSection === section ? 15 : 50,
            backgroundColor: 'black',
            transition: 'all 0.2s ease',
            position: 'relative',
          }}
          onMouseEnter={() => handleMouseEnter(section)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleNavigation(section)}
        >
          {(expandedSection === section || hoveredSection === section) && (
            <span className="tooltip">{
              section === 'landing-page' ? 'Landing Page' :
              section === 'featured-projects' ? 'Projects' :
              'About Me'
            }</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationCircles;
