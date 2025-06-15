"use client";

import React, { createContext, useContext, useState } from "react";

export type HoverContextType = {
  hoveredText: string | null;
  setHoveredText: (text: string | null) => void;
};

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  return (
    <HoverContext.Provider value={{ hoveredText, setHoveredText }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) throw new Error("useHover must be used within a HoverProvider");
  return context;
}; 