"use client";

import { ArrowRight } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface IconArrowProps {
  label?: string;
}

export const IconArrow: React.FC<IconArrowProps> = ({ label = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-[54px] h-[54px]"
    >
      {/* Arrow Button */}
      <motion.a
        href="#aboutme"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group w-full h-full rounded-full bg-[#0A0A0A] shadow-[inset_0_2px_0_0_rgba(184,180,180,0.14)] flex justify-center items-center overflow-visible relative"
      >
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="arrow-default"
              initial={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <ArrowRight className="text-white w-[25px] h-[28px] -rotate-45" />
            </motion.div>
          ) : (
            <motion.div
              key="arrow-hover"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <ArrowRight className="text-white w-[25px] h-[28px] -rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>

      {/* Floating Label */}

      <motion.p
        variants={{
          initial: {
            opacity: 0,
            x: 0,
            y: 0,
            rotate: -36,
          },
          hover: {
            opacity: 1,
            x: -16,
            y: 20,
            rotate: -36,
            transition: {
              type: "spring",
              duration: 0.4,
              bounce: 0.2,
            },
          },
        }}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        className="absolute top-4/5 left-[100%] text-[15px] text-white/60 z-50 origin-left pointer-events-none w-[80px]"
      >
        {label}
      </motion.p>

    </motion.div>
  );
};
