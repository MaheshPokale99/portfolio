'use client';

import React from 'react';
import HeadingButton from '../Buttons/HeadingButton';
import Heading from '../Elements/Heading';
import Paragraph from '../Elements/Paragraph';
import ProcessCard from '../Cards/ProcessCard';
import { motion } from 'framer-motion';
import { Icons } from '../../../public/index';
import Image from 'next/image';
import MainButton from '../Buttons/MainButton';
import { useInView } from 'react-intersection-observer'

interface AnimateOnScrollProps {
    children: React.ReactNode
    delay?: number
}
const processSteps = [
    {
        icon: Icons.CursorClick,
        title: 'Select a Plan.',
        desc: "Choose a plan that fits your needs, and we'll guide you through a seamless design and development process.",
        steps: '1',
    },
    {
        icon: Icons.ListChecks,
        title: 'Grab Your Designs.',
        desc: "Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals.",
        steps: '2',
    },
    {
        icon: Icons.MagicWand,
        title: 'Kickstart Development.',
        desc: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch.",
        steps: '3',
    },
    {
        icon: Icons.RocketLaunch,
        title: 'And Hand Over.',
        desc: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.",
        steps: '4',
    },
];

const Process = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <div
            id='process'
            className='w-full justify-center items-center gap-11 py-20 px-[18px] md:py-[100px] md:px-10 rounded-[16px] translate-y-[50px] border border-[#FFFFFF]/10 bg-[#111111]'
        >
            <div className='max-w-[720px] mx-auto flex flex-col items-center gap-6 text-center'>
                <HeadingButton heading='How it works' />
                <div className='w-full flex flex-col gap-4 justify-center items-center mx-auto'>
                    <Heading
                        first='Process'
                        second='Is Everything'
                        className='text-[40px] md:text-[44px] leading-[1.1] select-none'
                    />
                    <Paragraph para='Simple, streamlined process is what gets you results' />
                </div>
            </div>


            {/* Cards Row */}
            <div className='mt-16 w-full overflow-hidden scroll-smooth scrollbar-hide'>
                <div className='flex gap-6 px-4 md:flex-nowrap flex-wrap justify-center'>
                    {processSteps.map((step, index) => (
                        <ProcessCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            desc={step.desc}
                            steps={step.steps}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                    type: 'spring',
                    stiffness: 127,
                    damping: 25,
                    mass: 1,
                    delay: 0.2,
                }}
                className='w-full max-w-[840px] mx-auto flex flex-col lg:flex-row gap-6 p-6 rounded-[20px] overflow-hidden bg-[#111111] justify-between items-center text-white'
                style={{
                    boxShadow:
                        '16px 24px 20px 8px rgba(0,0,0,0.4), inset 0px 2px 0px 0px rgba(184,180,180,0.08)',
                }}
            >
                {/* Left content */}
                <div className='flex flex-col gap-2.5 text-left'>
                    <div className='flex items-center gap-2.5'>
                        <Image
                            src={Icons.SmileyWink}
                            alt='Smiley Wink'
                            width={25}
                            height={25}
                            className='invert'
                        />
                        <h5 className='text-[20px] leading-[1.4]'>I am with you in every step</h5>
                    </div>
                    <p className='opacity-70 text-[15px] leading-[1.8]'>
                        alongside you at each step for a seamless experience
                    </p>
                </div>

                {/* Right buttons */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <MainButton name='See All Projects' />
                    <MainButton name='Contact Now' variant='light' />
                </div>
            </motion.div>

        </div>
    );
};

export default Process;