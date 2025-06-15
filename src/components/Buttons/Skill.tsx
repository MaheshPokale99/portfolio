"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  Title: string;
}

const Skill: React.FC<SkillProps> = ({ Title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex items-center justify-center px-4 py-2 bg-[#0A0A0A] rounded-lg"
    >
      <p className="text-sm md:text-base opacity-80 text-[#ffffff99] font-medium whitespace-nowrap">
        {Title}
      </p>
    </motion.div>
  );
};

export default Skill;
