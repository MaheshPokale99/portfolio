"use client";

import { ArrowRight } from "phosphor-react";
import { motion } from "framer-motion";

export const IconArrow = () => {
  return (
    <motion.a
      href="#aboutme"
      className="group relative w-[54px] h-[54px] rounded-full bg-[#0A0A0A]
        shadow-[inset_0_2px_0_0_rgba(184,180,180,0.14)] flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
        bounce: 0.2,
      }}
    >
      {/* Icon Arrow */}
       <ArrowRight 
          className="w-[25px] h-[28px] text-white absolute -rotate-45
          transition-transform duration-300 transform  opacity-100
          group-hover:-translate-y-10" 
        />

      {/* Label on Hover */}
      <motion.span

        className="absolute left-[22px] top-[52px] -right-42 -bottom-11 text-white/60 text-sm -rotate-[35deg] pointer-events-none z-10"
        
      >
        <p></p>(about me)
      </motion.span>
    </motion.a>
  );
};
