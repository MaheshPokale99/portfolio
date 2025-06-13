"use client"

import React, { useState } from 'react'

interface MenuButtonProps {
  onClick?: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="w-8 h-8 relative flex items-center justify-center cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-[30px] h-[30px] mt-4">
        {/* Top bar */}
        <div
          className={`absolute h-0.5 w-[20px] bg-white transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? "rotate-45 w-[20px] top-[7px]" 
              : "w-[20px] top-1"
          }`}
        />
        
        {/* Bottom bar */}
        <div
          className={`absolute h-0.5 w-[20px] bg-white transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? "-rotate-45 w-[20px] top-[7px]" 
              : "w-[20px] top-3"
          }`}
        />
      </div>
    </button>
  )
}
