"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  first?: string;
  second?: string;
}

const Heading: React.FC<AnimatedTextProps> = ({ first = "", second = "" }) => {
  const words = [...first.split(" "), ...second.split(" ")].filter(Boolean);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="max-w-[496px] text-5xl md:text-7xl leading-tight font-normal tracking-tight flex flex-wrap items-baseline"
    >
      {words.map((word, index) => {
        const isSecond = index >= first.split(" ").filter(Boolean).length;
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
            className={`inline-block mr-3 ${
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
