"use client";

import { ArrowRight } from "phosphor-react";
import { motion } from "framer-motion";

export const IconArrow = () => {
  return (
    <motion.a
      href="#aboutme"
       onClick={(e) => {
        e.preventDefault();
        document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="group relative w-[54px] h-[54px] rounded-full bg-[#0A0A0A]
        shadow-[inset_0_2px_0_0_rgba(184,180,180,0.14)] flex justify-center items-center overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
        bounce: 0.2,
      }}
    >
      {/* Original Arrow (goes up on hover) */}
      <motion.div
        className="absolute"
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight className="w-[25px] h-[28px] text-white -rotate-45" />
      </motion.div>

      {/* New Arrow (comes from below on hover) */}
      <motion.div
        className="absolute"
        initial={{ y: 40, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <ArrowRight className="w-[25px] h-[28px] text-white rotate-0" />
      </motion.div>

      {/* Label sliding in from the left */}
      <motion.span
        initial={{ opacity: 0, x: -60 }}
        whileHover={{ opacity: 1, x: -80 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-white/60 text-sm pointer-events-none z-10 rotate-[-25deg] origin-left"
      >
        (about me)
      </motion.span>
    </motion.a>
  );
};
