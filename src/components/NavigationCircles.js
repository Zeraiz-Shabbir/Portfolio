import React, { useState, useEffect, useMemo } from 'react';
import './NavigationCircles.css';

const NavigationCircles = ({ onNavigate, activeSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [lastActiveSection, setLastActiveSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim(); // Get accent color

  const sections = useMemo(() => ['landing-page', 'featured-projects', 'about-me'], []);

  const handleMouseEnter = (section) => {
    if (!isNavigating) {
      setHoveredSection(section);
      setExpandedSection(section);
    }
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
    setExpandedSection(null);
  };

  const handleNavigation = (section) => {
    setIsNavigating(true);
    setExpandedSection(section);
    onNavigate(section);
    setLastActiveSection(section);

    setHoveredSection(null);
    setTimeout(() => {
      setExpandedSection(null);
      setIsNavigating(false);
    }, 500);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isNavigating) {
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

  useEffect(() => {
    if (expandedSection) {
      const timeoutId = setTimeout(() => {
        setExpandedSection(null);
      }, 1000);

      return () => clearTimeout(timeoutId);
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
            borderRadius: 10, // Rounded corners for the background
            backgroundColor: (section === activeSection) ? accentColor : secondaryColor, // Use accent color for active section
            transition: 'all 0.2s ease',
            position: 'relative',
          }}
          onMouseEnter={() => handleMouseEnter(section)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleNavigation(section)}
        >
          {(expandedSection === section || hoveredSection === section) && (
            <span className="tooltip">{
              section === 'landing-page' ? 'Overview' :
              section === 'featured-projects' ? 'Portfolio' :
              'About Me'
            }</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationCircles;
