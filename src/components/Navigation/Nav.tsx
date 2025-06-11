"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { MenuButton } from '../Buttons/MenuButton'
import Logo from './Logo'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navData = ["Services", "Projects", "Testimonials", "Contact"];

    return (
        <div className="fixed top-0 left-0 right-0 flex flex-col items-center px-4 py-6 z-50">
            {/* Desktop Navigation */}
            <nav className='relative items-center justify-between max-w-[1350px] w-[840px] h-[64px] px-10 space-x-8 bg-[#111111]/70 backdrop-blur-md rounded-full border border-white/10 lg:flex hidden'
                style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)" }}>

                <Logo />

                {/* Navigation Links */}
                <div className="flex mx-auto space-x-2 mr-4">
                    {navData.map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase()}`}
                            className="py-1.5 px-3 text-[#FFFFFF]/60 text-[15px] font-semibold leading-[2] hover:text-[#FFFFFF] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <p
                    className="flex items-center space-x-1.5 px-5 py-2 h-11 w-42 bg-[#111111] backdrop-blur-[5px] text-[#888] rounded-full border border-white/10 relative hover:cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)"}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = "inset 0px -8px 10px 0px rgba(0, 0, 0, 0.5)"}
                >
                    <span className="text-base">✨</span>
                    Reach out
                </p>
            </nav>

            {/* Mobile Navigation Container */}
            <div className="relative w-full max-w-[840px] lg:hidden">
                <div className="relative">
                    <nav className={`flex items-center justify-between h-[64px] px-5 bg-[#0A0A0A] backdrop-blur-lg ${isMenuOpen ? "rounded-t-[32px]" : "rounded-[32px]"
                        } border border-[#222222]/40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
                        {/* Logo */}
                        <Logo></Logo>

                        {/* Hamburger Button */}
                        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </nav>

                    {/* Menu Panel */}
                    <div
                        className={`absolute top-[55px] left-0 right-0 bg-[#0A0A0A]/90 backdrop-blur-lg border-x border-b border-[#222222]/40 rounded-b-[28px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-100 max-h-[420px]' : 'opacity-0 max-h-0'
                            }`}
                        style={{
                            transitionProperty: 'max-height, opacity, border-radius',
                        }}
                    >
                        <div className={`px-5 py-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                            }`}
                            style={{
                                transitionDelay: isMenuOpen ? '250ms' : '0ms'
                            }}
                        >
                            {/* Menu Items */}
                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col space-x-2">
                                    {navData.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={`/${item.toLowerCase()}`}
                                            className="py-1.5 px-3 text-[#FFFFFF]/60 text-[15px] font-semibold leading-[2] hover:text-[#FFFFFF] transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>

                                {/* Get for Free Button */}
                                <div className="pt-4">
                                    <p
                                        className="flex max-w-fit items-center space-x-1.5 px-5 py-2 h-12 bg-[#111111] backdrop-blur-[5px] text-[#888] rounded-full border border-white/10 relative hover:cursor-pointer"
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)"}
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "inset 0px -8px 10px 0px rgba(0, 0, 0, 0.5)"}
                                    >
                                        <span className="text-base">✨</span>
                                        Reach Out
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav