"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainCursor from './MainCursor';

interface CursorProps {
  section?: 'aboutme' | 'projects' | null;
}

const Cursor = ({ section }: CursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isNearSection, setIsNearSection] = useState(false);
  const [currentSection, setCurrentSection] = useState<'about' | 'projects' | null>(null);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Check if mouse is over navbar
  const isOverNavbar = useCallback(() => {
    const navbar = document.querySelector('nav');
    if (!navbar) return false;
    
    const navRect = navbar.getBoundingClientRect();
    return mousePosition.y <= navRect.bottom;
  }, [mousePosition.y]);

  // Improved section detection with immediate updates
  const detectCurrentSection = useCallback(() => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const scrollY = window.scrollY;
    const mouseY = mousePosition.y + scrollY;

    if (!aboutSection || !projectsSection) return null;

    const aboutTop = aboutSection.offsetTop;
    const aboutBottom = aboutTop + aboutSection.offsetHeight;
    const projectsTop = projectsSection.offsetTop;
    const projectsBottom = projectsTop + projectsSection.offsetHeight;

    if (mouseY >= projectsTop && mouseY <= projectsBottom) {
      return 'projects';
    } else if (mouseY >= aboutTop && mouseY <= aboutBottom) {
      return 'about';
    }
    
    return null;
  }, [mousePosition.y]);

  // Update cursor state immediately
  const updateCursorState = useCallback(() => {
    if (isOverNavbar()) {
      setIsVisible(false);
      setIsNearSection(false);
      setCurrentSection(null);
      return;
    }

    const detectedSection = detectCurrentSection();
    setCurrentSection(detectedSection);
    setIsVisible(!!detectedSection);
    setIsNearSection(false);
  }, [detectCurrentSection, isOverNavbar]);

  // Mouse move handler with immediate updates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e);
      updateCursorState();
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [updateMousePosition, updateCursorState]);

  // Scroll handler with immediate updates
  useEffect(() => {
    const handleScroll = () => {
      updateCursorState();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateCursorState]);

  const springTransition = {
    type: "spring",
    mass: 0.8,
    stiffness: 150,
    damping: 15,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  const variants = {
    initial: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      scale: 0.8,
      opacity: 0,
      borderRadius: 6
    },
    animate: {
      x: mousePosition.x - 66,
      y: mousePosition.y - 22,
      width: 132,
      height: 44,
      scale: 1,
      opacity: 1,
      borderRadius: 22,
      transition: {
        opacity: { duration: 0.2 },
        scale: springTransition,
        width: {
          ...springTransition,
          stiffness: 120,
          damping: 20
        },
        height: {
          ...springTransition,
          stiffness: 120,
          damping: 20
        },
        borderRadius: {
          ...springTransition,
          stiffness: 140,
          damping: 15
        },
        x: {
          ...springTransition,
          stiffness: 500,
          damping: 30
        },
        y: {
          ...springTransition,
          stiffness: 500,
          damping: 30
        }
      }
    },
    exit: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      scale: 0.8,
      opacity: 0,
      borderRadius: 6,
      transition: {
        opacity: { duration: 0.2 },
        scale: springTransition,
        width: {
          ...springTransition,
          stiffness: 150,
          damping: 15
        },
        height: {
          ...springTransition,
          stiffness: 150,
          damping: 15
        },
        borderRadius: {
          ...springTransition,
          stiffness: 140,
          damping: 15
        },
        x: {
          ...springTransition,
          stiffness: 500,
          damping: 30
        },
        y: {
          ...springTransition,
          stiffness: 500,
          damping: 30
        }
      }
    }
  };

  const textVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <>
      <MainCursor isInSection={isVisible} isNearSection={isNearSection} />
      <AnimatePresence mode="sync">
        {isVisible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              background: 'rgba(99, 99, 99, 0.3)',
              backdropFilter: 'blur(8px)',
              transformOrigin: 'center',
              border: '1px solid rgba(214, 214, 214, 1.0)',
              boxShadow: '0 0 20px 4px rgba(92,92,92,0.3)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none',
              zIndex: 9998,
              willChange: 'transform, width, height, border-radius, opacity-100'
            }}
          >
            <motion.p
              variants={textVariants}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'rgba(255, 255, 255, 0.9)',
                whiteSpace: 'nowrap'
              }}
            >
              {currentSection === 'projects' ? 'View project' : 'Read more'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cursor;