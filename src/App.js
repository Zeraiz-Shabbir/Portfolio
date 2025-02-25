import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavigationCircles from './components/NavigationCircles';
import SettingsDialog from './components/SettingsDialog'; 
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const [activeSection, setActiveSection] = useState('landing-page'); 
  const [isProjectOpen, setIsProjectOpen] = useState(false); 
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); 
  const scrollRef = useRef(null);
  const sectionsRef = useRef({}); 

  // Function to get a cookie value
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const [theme, setTheme] = useState(getCookie('theme') || 'Default'); // Get theme from cookie

  useEffect(() => {
    // Update theme on component mount based on the cookie
    updateTheme(theme);
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionsRef.current).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [theme]);

  const handleNavigate = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // Save theme in cookies for 1 year
    updateTheme(newTheme);
  };

  const updateTheme = (theme) => {
    const themeColors = {
      Default: { primaryColor: '#F8F8F8', secondaryColor: '#333333', accentColor: '#FF6F61' },
      'Evening Dusk': { primaryColor: '#2C3E50', secondaryColor: '#ECF0F1', accentColor: '#E74C3C' },
      'Coastal Mist': { primaryColor: '#E3EEF3', secondaryColor: '#34495E', accentColor: '#2A9D8F' },
      'Warm Stone': { primaryColor: '#E5D4C0', secondaryColor: '#4A4031', accentColor: '#D2691E' },
      'Soft Dawn': { primaryColor: '#FFF9E6', secondaryColor: '#3A3A3A', accentColor: '#88B04B' },
    };    

    const { primaryColor, secondaryColor, accentColor } = themeColors[theme] || themeColors['Default'];
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
  };

  useEffect(() => {
    if (isProjectOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isProjectOpen]);

  return (
    <div className="App" ref={scrollRef}>
      {!isProjectOpen && (
        <>
          <Navbar
            isVisible={isVisible}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onOpenSettings={handleOpenSettings}
          />
          <NavigationCircles
            onNavigate={handleNavigate}
            activeSection={activeSection}
          />
        </>
      )}
      <div ref={(el) => (sectionsRef.current['landing-page'] = el)} id="landing-page">
        <LandingPage />
      </div>
      <div ref={(el) => (sectionsRef.current['featured-projects'] = el)} id="featured-projects">
        <Projects onOpenProject={setIsProjectOpen} />
      </div>
      <div ref={(el) => (sectionsRef.current['about-me'] = el)} id="about-me">
        <AboutMe />
      </div>

      {isSettingsOpen && <SettingsDialog onClose={handleCloseSettings} onChangeTheme={handleChangeTheme} />}
    </div>
  );
};

export default App;
