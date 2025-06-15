'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HeadingButton from '../Buttons/HeadingButton';
import Heading from '../Elements/Heading';
import MainButton from '../Buttons/MainButton';

const CTASection = () => {
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { threshold: 0.25 });
    const imageControls = useAnimation();

    useEffect(() => {
        if (isImageInView) {
            imageControls.start({ opacity: 1, x: 0 });
        } else {
            imageControls.start({ opacity: 0, x: -50 });
        }
    }, [isImageInView, imageControls]);

    return (
        <div className="w-full h-fit py-10 px-[18px] sm:p-10 gap-16 rounded-[48px] border border-[#FFFFFF]/10 bg-[#0D0D0D] flex flex-col md:flex-row items-center justify-center overflow-hidden">
            {/* Left Content */}
            <div className="w-full max-w-[720px] flex flex-col gap-8 items-start justify-center">
                {/* Heading Row */}
                <div className="w-full h-[122px] flex flex-col items-start justify-center gap-6 text-center">
                    <HeadingButton heading="Let's Connect" />
                    <Heading
                        first="Let's Grow"
                        second="Together"
                        className="text-[clamp(2rem,5vw,3rem)] leading-tight"
                    />
                </div>

                {/* Description Row */}
                <div className="w-full flex flex-col gap-6 border-y border-[#ffffff]/10 py-6 px-2">
                    <div className="flex flex-col gap-1">
                        <h5 className="text-[20px] leading-snug font-semibold">Web Design</h5>
                        <p className="text-[15px] opacity-60 leading-relaxed">
                            Showcasing sleek, high-performance designs tailored for impact.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10" />

                    <div className="flex flex-col gap-1">
                        <h5 className="text-[20px] leading-snug font-semibold">Framer Development</h5>
                        <p className="text-[15px] opacity-60 leading-relaxed">
                            Building visually stunning, user-focused websites that elevate brands.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-4">
                    <MainButton name="See All Projects" />
                    <MainButton name="Contact Now" variant="light" />
                </div>
            </div>

            {/* Right Side Image  */}
            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: -50 }}
                animate={imageControls}
                transition={{
                    type: 'spring',
                    stiffness: 127,
                    damping: 25,
                    mass: 1,
                    delay: 0.1
                }}
                className="max-w-[720px] h-[338px] justify-center items-start p-6 rounded-[20px] overflow-visible"
                style={{ boxShadow: "16px 24px 20px 8px rgba(0,0,0,0.4)" }}
            >
                <img
                    src=""
                    alt=""
                    className="w-fit h-[290px] rounded-[7px]"
                    style={{ boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)" }}
                />
            </motion.div>
        </div>
    );
};

export default CTASection;
