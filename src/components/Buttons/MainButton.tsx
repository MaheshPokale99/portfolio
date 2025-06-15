"use client";

import React from 'react'
import {motion} from "framer-motion"

interface MainButtonProps {
  name: string;
  href?: string;
  variant?: 'dark' | 'light';
}

const MainButton: React.FC<MainButtonProps> = ({ name, href = "", variant = 'dark' }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      whileTap={{ y: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 60,
        mass: 1,
        delay:0
      }}
      className={`
        inline-flex justify-center items-center py-4 px-8 rounded-full
        font-medium text-base transition-all duration-300 opacity-100 hover:opacity-80 w-[280px] md:w-fit
        ${variant === 'dark' 
          ? 'bg-gradient-to-b from-[#787878]/14 to-[#0A0A0A] text-white'
          : 'bg-gradient-to-b from-white to-[#ffffff]/18 text-black '
        }
        shadow-[inset_0px_1px_0px_rgba(255,255,255,0.1)]
        hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
      `}
    >
      {name}
    </motion.a>
  )
}

export default MainButton