// src/hooks/useScrollTrigger.js
import { useEffect, useState } from 'react';

const useScrollTrigger = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        // Check if the target element is in the viewport
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll on mount to set initial visibility
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef]);

  return isVisible;
};

export default useScrollTrigger;
