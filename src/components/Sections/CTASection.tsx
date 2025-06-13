import React from 'react'
import { motion } from "framer-motion";
import HeadingButton from '../Buttons/HeadingButton';


const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const word = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.4,
            bounce: 0,
            delay: 0.075
        }
    }
};
const CTASection = () => {

    const words = ["Let's", "Grow", "Together"];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                duration: 0.4,
                bounce: 0.2,
                delay: 0
            }}
            className='max-w-[1300px] h-fit items-center justify-center gap-16 p-10 bg-[rgba(13,13,13,1)] rounded-[48px] border-[FFFFFF]/10'
        >
            <motion.div
                className='relative h-fit w-max-[1100px] justify-start items-center gap-11 border-[#FFFFFF]/10 bg-[#111111] flex flex-row lg:flex-col'
            >
                <motion.div
                    className='max-w-[720px] h-fit flex flex-col justify-center items-start gap-8'
                >
                    <div>
                        <HeadingButton heading="Let's Connect"></HeadingButton>
                        <motion.div
                            className="flex gap-2 text-4xl font-bold"
                            initial="hidden"
                            animate="visible"
                        >
                            {words.map((wordText, i) => (
                                <motion.span
                                    className='text-[54px] leading-[1.1px] items-start'
                                    key={i}
                                    variants={word}
                                    transition={{
                                        ...word.visible.transition,
                                        delay: 0.075 * i

                                    }}
                                >
                                    {wordText}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className='w-fit h-fit justify-start items-center gap-4  py-4 border-[#FFFFFF]/10'>
                        <div className='items-center justify-center gap-4 rounded-[48px] flex flex-row'>
                            <div className='flex items-center justify-start gap-2.5'>
                                <h5>Web Design</h5>
                            </div>
                            <p className='text-[15px] leading-0.5 opacity-60'>Showcasing sleek, high-performance designs tailored for impact</p>
                        </div>
                        <div className='items-center justify-center gap-4 rounded-[48px] flex flex-row'>
                            <div className='flex items-center justify-start gap-2.5'>
                                <h5>Framer Development</h5>
                            </div>
                            <p className='text-[15px] leading-0.5 opacity-60'>Building visually stunning, user-focused websites that elevate brands.</p>
                        </div>
                    </div>

                    <div>
                        
                    </div>

                </motion.div>
                <motion.div>

                </motion.div>
            </motion.div>
        </motion.section >

    )
}


export default CTASection