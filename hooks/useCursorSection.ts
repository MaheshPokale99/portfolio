"use client";

import { useState, useEffect, useCallback } from 'react';

type CursorSection = 'about' | 'projects' | null;

export const useCursorSection = () => {
  const [currentSection, setCurrentSection] = useState<CursorSection>(null);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');

    if (!aboutSection || !projectsSection) return;

    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    // Use the top 1/3 of the viewport for better detection
    const triggerPosition = scrollPosition + (viewportHeight / 3);

    const aboutTop = aboutSection.offsetTop;
    const aboutBottom = aboutTop + aboutSection.offsetHeight;
    const projectsTop = projectsSection.offsetTop;
    const projectsBottom = projectsTop + projectsSection.offsetHeight;

    // Check if we're in a section with some buffer zone
    const buffer = 100; // pixels
    const isInAbout = 
      triggerPosition >= (aboutTop - buffer) && 
      triggerPosition < (projectsTop - buffer);

    const isInProjects = 
      triggerPosition >= (projectsTop - buffer) && 
      triggerPosition <= (projectsBottom + buffer);

    // Update section with the new logic
    if (isInProjects) {
      setCurrentSection('projects');
    } else if (isInAbout) {
      setCurrentSection('about');
    } else {
      setCurrentSection(null);
    }
  }, []);

  useEffect(() => {
    // Debounce the scroll event
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10); // 10ms debounce
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  return currentSection;
};

export default useCursorSection; 