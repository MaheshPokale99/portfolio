"use client";

import { motion } from "framer-motion";

interface ParagraphProps {
  para: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ para }) => {
  const words = para.trim().split(" ").filter(Boolean);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="font-medium flex flex-wrap items-center text-[16px] leading-[2] text-white/60 text-justify"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.6,
            delay: index * 0.05,
            bounce: 0.25,
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Paragraph;
