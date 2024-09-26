import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavigationCircles from './components/NavigationCircles'; // Import NavigationCircles
import './App.css'; // Import CSS for snap scrolling

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null); // Reference to the scrolling container

  const handleNavigate = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App" ref={scrollRef}>
      <Navbar
        isVisible={isVisible}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      <NavigationCircles onNavigate={handleNavigate} /> {/* Include NavigationCircles */}
      <LandingPage />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default App;
