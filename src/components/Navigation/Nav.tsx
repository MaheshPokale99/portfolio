"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navData = ["Services", "Projects", "Testimonials", "Contact"];

    return (
        <div className="w-full flex justify-center fixed top-[25px] left-[230px] r-[230px] bottom-[711px]">
            {/* Desktop Navigation */}
            <nav className='relative flex items-center justify-between max-w-[1350px] w-[840px] h-[64px] px-8 my-4 bg-[#111111]/70 backdrop-blur-md rounded-full border border-white/10 md:flex hidden'
                style={{boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.25)"}}>
                
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                    </div>
                    <Link href="/" className="text-xl font-semibold text-white">
                        Polo
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-10">
                    {navData.map((item, index) => (
                        <Link 
                            key={index} 
                            href={`/${item.toLowerCase()}`}
                            className="text-[#888] hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Get for Free Button */}
                <button className="flex items-center gap-2 px-5 py-2 bg-[#111111] text-[#888] rounded-full border border-white/10 hover:text-white hover:border-white/20 transition-all">
                    <span className="text-base">✨</span>
                    Get for Free
                </button>
            </nav>

            {/* Mobile Navigation */}
            <nav className='relative flex items-center justify-between max-w-[1350px] w-[390px] h-[64px] px-4 my-4 bg-[#0A0A0A]ww backdrop-blur-md rounded-full border border-[#222222] md:hidden'
                style={{boxShadow:"0px 1px 2px rgba(0, 1, 2, 0)"}}>
                
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                    </div>
                    <Link href="/" className="text-xl font-semibold text-white">
                        Polo
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                >
                    {isMenuOpen ? (
                        <span className="text-2xl">×</span>
                    ) : (
                        <span className="text-xl">≡</span>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#111111] z-50 md:hidden">
                    <div className="flex flex-col items-start p-6 pt-24">
                        {navData.map((item, index) => (
                            <Link 
                                key={index} 
                                href={`/${item.toLowerCase()}`}
                                className="text-[#888] hover:text-white transition-colors py-4 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <button 
                            className="flex items-center gap-2 px-5 py-2 bg-[#111111] text-[#888] rounded-full border border-white/10 hover:text-white hover:border-white/20 transition-all mt-6"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="text-base">✨</span>
                            Get for Free
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Nav