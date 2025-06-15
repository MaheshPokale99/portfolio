'use client';

import React from 'react';
import HeadingButton from '../Buttons/HeadingButton';
import Heading from '../Elements/Heading';
import Paragraph from '../Elements/Paragraph';
import Skill from '../Buttons/Skill';
import { TwitterIcon, LinkedinIcon, GitHubIcon } from '../Icons/SocialIcons'
import Link from 'next/link';
import { useHover } from "../../context/HoverContext";



const skills = [
    'C++',
    'Data Structures',
    'Algorithms',
    'React.js',
    'Next.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'Express.js',
    'Tailwind CSS',
    'Socket.IO',
    'Framer Motion',
];

const AboutMe = () => {
      const { hoveredText, setHoveredText } = useHover();
    
    const socialLinks = [
        { name: "GitHub", icon: <GitHubIcon />, href: "https://github.com/MaheshPokale99" },
        { name: "Linkedin", icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/maheshpokale99/" },
        { name: "Twitter", icon: <TwitterIcon />, href: "https://x.com/MPokale42883" },
    ]
    return (
        <section
            id="aboutme"
            className="relative w-full py-16 md:py-24 px-6 md:px-10 bg-[#0D0D0D] rounded-2xl mx-auto mt-12 border border-white/10"
        >
            {/* Top Heading Area */}
            <div className="flex flex-col gap-5 max-w-3xl mx-auto text-center items-center">
                <HeadingButton heading="Expert Developer" />
                <Heading
                    first="Mahesh Pokale"
                    second="Your Developer"
                    className="text-[32px] sm:text-[40px] md:text-[44px]"
                />
                <Paragraph
                    para="Brief initial presentation of myself and my previous experiences."
                    className="max-w-xl sm:max-w-2xl text-center mx-auto text-[15px]"
                />
            </div>

            {/* Bio Section */}
            <div className="flex flex-col lg:flex-row gap-10 mt-12 items-center justify-center">
                {/* Left Panel */}
                <div
                    className="w-full lg:max-w-[400px] flex flex-col items-start gap-6 p-6 pb-8 bg-[#111111] rounded-xl"
                    style={{
                        boxShadow: '16px 24px 20px 8px rgba(0,0,0,0.4), inset 0px 2px 0px 0px rgba(184,180,180,0.08)',
                    }}
                >
                    <img
                        src="/your-image.jpg"
                        alt="Mahesh Pokale"
                        className="w-full max-h-[380px] object-cover rounded-lg shadow-lg"
                    />

                    <div className="flex flex-col gap-1">
                        <h4 className="text-[24px] font-semibold text-white leading-[1.4]">
                            Hello, I’m Mahesh Pokale
                        </h4>
                        <p className="text-[15px] text-white/70 leading-[1.6]">
                            Real-Time Developer & DSA Enthusiast Turning Code into Scalable Experiences
                        </p>
                    </div>
                    <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#0A0A0A] hover:bg-[#111111] transition-colors duration-300"
                            aria-label={social.name}
                            onMouseEnter={() => setHoveredText(social.name)}
                            onMouseLeave={() => setHoveredText(null)} 
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
        </div>

                {/* Right Panel */}
                <div
                    className="w-full lg:max-w-3xl flex flex-col gap-6 px-6 py-6 md:p-10 bg-[#111111] overflow-hidden rounded-2xl"
                    style={{
                        boxShadow: '16px 24px 20px 8px rgba(0,0,0,0.4), inset 0px 2px 0px 0px rgba(184,180,180,0.08)',
                    }}
                >
                    <Paragraph
                        para="I'm Mahesh Pokale, a passionate Full Stack Developer and Competitive Programmer from India. With a strong foundation in C++, Data Structures, and Algorithms, I bring logic-driven development together with modern design to craft robust, scalable web experiences. From building real-time collaborative platforms to integrating powerful APIs and custom UI interactions, I thrive at the intersection of performance and creativity. I'm dedicated to turning complex ideas into clean, intuitive digital solutions."
                        className="text-justify text-[16px]"
                    />

                    <div className="flex flex-wrap gap-3 mt-2">
                        {skills.map((skill) => (
                            <Skill key={skill} Title={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
