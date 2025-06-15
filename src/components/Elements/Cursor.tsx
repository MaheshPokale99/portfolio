"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHover } from "../../context/HoverContext";


const Cursor = () => {
  const { hoveredText, setHoveredText } = useHover();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const detectCurrentSection = useCallback(() => {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    if (!about || !projects) return null;

    const scrollY = window.scrollY;
    const mouseY = mousePosition.y + scrollY;

    const aboutTop = about.offsetTop;
    const aboutBottom = aboutTop + about.offsetHeight;
    const projectsTop = projects.offsetTop;
    const projectsBottom = projectsTop + projects.offsetHeight;

    if (mouseY >= aboutTop && mouseY <= aboutBottom) return "about";
    if (mouseY >= projectsTop && mouseY <= projectsBottom) return "projects";
    return null;
  }, [mousePosition.y]);

  const updateCursorState = useCallback(() => {
    const section = detectCurrentSection();
    setIsInSection(!!section);
  }, [detectCurrentSection]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      updateMousePosition(e);
      updateCursorState();
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", updateCursorState);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", updateCursorState);
    };
  }, [updateMousePosition, updateCursorState]);

  const spring = {
    type: "spring",
    stiffness: 500,   
    damping: 60,     
    mass: 1,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  const ease = [0.23, 1, 0.32, 1]; 
  return (
    <motion.div
      animate={{
        x: mousePosition.x - (isInSection ? 70 : 6),
        y: mousePosition.y - (isInSection ? 24 : 6),
        width: hoveredText || isInSection ? 132 : 12,
        height: hoveredText || isInSection ? 44 : 12,
        borderRadius: isInSection ? 40 : 40,
        backgroundColor:hoveredText || isInSection
          ? "rgba(99, 99, 99, 0.3)"
          : "rgba(230, 230, 230, 1.0)",
        backdropFilter: hoveredText || isInSection ? "blur(6px)" : "none",
        boxShadow: "0 0 20px 4px rgba(92,92,92,0.3)",
        opacity: 1
      }}
      transition={{
        ...spring,
        backgroundColor: { duration: 0.8, ease },
        boxShadow: { duration: 0.8, ease },
        backdropFilter: { duration: 0.9, ease },
        borderRadius: { duration: 0.5, ease }
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        border:"1px solid #D6D6D6",
        fontSize: "16px",
        fontWeight: 500,
        whiteSpace: "nowrap",
        transformOrigin: "center",
        willChange: "transform, width, height, background, box-shadow, blur",
        mixBlendMode: isInSection ? "normal" : "difference"

      }}
    >
      <AnimatePresence mode="wait">
         {(hoveredText || isInSection) && (
          <motion.span
            key="text"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              filter: "blur(6px)"
            }}
            transition={{
              duration: 0.5,  
              ease           
            }}
          >
           {hoveredText ? hoveredText : "View project"}
          </motion.span>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Cursor;
