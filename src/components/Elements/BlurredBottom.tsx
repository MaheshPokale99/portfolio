'use client';
import { motion } from 'framer-motion';

const BlurredBottom = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 top-[710px] w-full h-[110px] pointer-events-none z-50"
      initial={{ opacity: 0.2, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
    >
      <div className=" backdrop-blur-[3px] opacity-100 w-full h-full"></div>
    </motion.div>
  );
};

export default BlurredBottom;
