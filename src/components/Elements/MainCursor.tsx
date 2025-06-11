"use client";

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface MainCursorProps {
  isInSection: boolean;
  isNearSection: boolean;
}

const MainCursor = ({ isInSection, isNearSection }: MainCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [updateMousePosition]);

  return (
    <AnimatePresence mode="sync">
      {!isInSection && (
        <motion.div
          initial={{ 
            scale: 0,
            opacity: 0,
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
          }}
          animate={{ 
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            scale: isNearSection ? 1.2 : 1,
            opacity: 1,
            transition: {
              x: { 
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
              },
              y: { 
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
              },
              scale: { 
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 1,
                duration: 0.5
              },
              opacity: { 
                duration: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { 
              duration: 0.2,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'difference',
            willChange: 'transform',
            boxShadow: isNearSection 
              ? '0 0 16px 4px rgba(255,255,255,0.4), 0 0 4px 2px rgba(255,255,255,0.3) inset' 
              : '0 0 12px 3px rgba(255,255,255,0.3)',
            transformOrigin: 'center'
          }}
        />
      )}
    </AnimatePresence>
  )
}

export default MainCursor