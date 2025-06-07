"use strict"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link';
import { TwitterIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from '../Icons/SocialIcons'


const Footer = () => {
    const navData = ["Services", "Projects", "Testimonials", "Contact"];
    const socialLinks = [
        { name: "GitHub", icon: <GitHubIcon />, href: "#" },
        { name: "Linkedin", icon: <LinkedinIcon />, href: "#" },
        { name: "Twitter", icon: <TwitterIcon />, href: "#" },
        { name: "Instagram", icon: <InstagramIcon />, href: "#" },
    ]

    return (
        <div className='flex flex-col max-w-[1220px] h-fit gap-8 mt-48 px-10 py-[100px]'>
            {/* top */}
            <div className='flex justify-between'>
                {/* left */}
                <div className='flex flex-col max-w-[1120px] h-fit gap-[60px]'>
                    {/* logo */}
                    <div className='lg:w-40'>
                        <Logo></Logo>
                    </div>

                    {/* links */}
                    <div>
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
                            className="text-[#666] w-10 h-10 rounded-full hover:text-white transition-colors"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
            {/* bottom */}
            <div></div>
        </div>
    )
}

export default Footer