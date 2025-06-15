'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface ProcessCardProps {
  icon: string;
  title: string;
  desc: string;
  steps: string | number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, desc, steps }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        type: 'spring',
        duration: 0.4,
        bounce: 0.2,
        delay: 0,
      }}
      className='relative w-full max-w-[590px] h-[290px] flex flex-col justify-start items-start gap-6 p-[30px] rounded-2xl'
      style={{
        boxShadow:
          '16px 24px 20px 8px rgba(0,0,0,0.4), inset 0px 2px 0px 0px rgba(184,180,180,0.08)',
      }}
    >
      {/* Step Badge */}
      <div
        className='absolute top-[15px] left-[542px] right-[13px] bottom-[242px] w-[35px] h-[38px] flex justify-center items-center rounded-full bg-[#0A0A0A] z-50'
        style={{
          boxShadow: 'inset 0px 2px 0px 0px rgba(184,180,180,0.14)',
        }}
      >
        <p className='text-[16px] text-white'>{steps}</p>
      </div>

      {/* Icon */}
      <Image
        src={icon}
        alt={`${title} icon`}
        width={30}
        height={30}
        className='w-[30px] h-[30px] invert'
      />

      {/* Title & Description */}
      <div className='w-full h-[119px] flex flex-col justify-start items-start gap-2.5 md:w-[85%] md:h-[92px]'>
        <h5 className='text-[20px] leading-[1.4] text-white'>{title}</h5>
        <p className='text-[15px] leading-[1.8] max-h-[81px] opacity-70 text-white'>{desc}</p>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] opacity-10 bg-white'></div>

      {/* Footer Step Text */}
      <div className='w-fit h-[35px] flex justify-center items-center px-4 py-1 border border-[#ffffff]/10 bg-[#111111] rounded-full'>
        <p className='opacity-70 text-[15px] leading-[1.8] text-white'>{`step ${steps}`}</p>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
