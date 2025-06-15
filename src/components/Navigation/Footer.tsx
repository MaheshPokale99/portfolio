"use strict"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link';
import Image from 'next/image'
import { useHover } from "../../context/HoverContext";


import { TwitterIcon, InstagramIcon, LinkedinIcon, GitHubIcon, LeetCodeIcon } from '../Icons/SocialIcons'


const Footer = () => {    
    const { hoveredText, setHoveredText } = useHover();
    const navData = ["Services", "Projects", "Testimonials", "Contact"];
    const socialLinks = [
        { name: "GitHub", icon: <GitHubIcon />, href: "https://github.com/MaheshPokale99" },
        { name: "Linkedin", icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/maheshpokale99/" },
        { name: "Leetcode", icon: <LeetCodeIcon />, href: "https://leetcode.com/u/Mahesh_pokale99/" },
        { name: "Twitter", icon: <TwitterIcon />, href: "https://x.com/MPokale42883" },
        { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/maheshpokale99/" },
    ]

    return (
        <div className='mt-64 flex flex-col mx-auto max-w-[1220px] h-fit gap-8 px-[18px] pt-16 pb-12 md:px-10 md:py-[100px]'>
            {/* top */}
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-between'>
                {/* left */}
                <div className='flex flex-col max-w-[1120px] h-fit gap-[60px]'>
                    {/* logo */}
                    <div className='lg:w-40'>
                        <Logo></Logo>
                    </div>

                    {/* links */}
                    <div className='flex flex-col gap-6 md:gap-0 md:flex-row'>
                        {navData.map((item, index) => (
                            <Link
                                key={index}
                                href={`/${item.toLowerCase()}`}
                                className="mr-8 text-[#FFFFFF]/60 text-[15px] leading-[2] hover:text-[#FFFFFF] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* right */}
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
            {/* bottom */}
            <div>
                <div className='flex items-center cursor-pointer'>
                    <span>Made by</span>
                    <Image
                        src="/mahesh.svg"
                        alt="Mahesh"
                        width={24}
                        height={24}
                        className="w-30 h-7"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer