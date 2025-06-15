"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  first?: string;
  second?: string;
  className?: string; 
}

const Heading: React.FC<AnimatedTextProps> = ({
  first = "",
  second = "",
  className = "",
}) => {
  const words = [...first.split(" "), ...second.split(" ")].filter(Boolean);
  const firstWordsCount = first.trim().split(/\s+/).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className={`flex flex-wrap items-baseline leading-tight tracking-tight font-light ${className}`}
    >
      {words.map((word, index) => {
        const isSecond = index >= firstWordsCount;
        return (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: index * 0.08,
              bounce: 0.2,
            }}
            className={`inline-block mr-2 md:mr-3 whitespace-nowrap ${
              isSecond ? "text-white/60" : "text-white"
            }`}
          >
            {word}
          </motion.h1>
        );
      })}
    </motion.div>
  );
};

export default Heading;
