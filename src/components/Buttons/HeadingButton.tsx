"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HeadingButtonProps {
  heading: string;
}

const HeadingButton: React.FC<HeadingButtonProps> = ({ heading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.4,
        delay: 0.5,
        bounce: 0.2,
      }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] rounded-full shadow-[inset_16px_10px_4px_rgba(0,0,0,0.25)]"
      style={{ boxShadow: "inset 16px 10px 25px 10px rgba(0,0,0,0.4)" }}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <div className="absolute w-4 h-4 rounded-full border border-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>
      <span className="text-[15px] text-white font-normal">{heading}</span>
    </motion.div>
  );
};

export default HeadingButton;
