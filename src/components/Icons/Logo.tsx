"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'default' | 'icon-only'
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  if (variant === 'icon-only') {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">→</span>
        </div>
      </Link>
    )
  }

  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.svg"
        alt="Polo Logo"
        width={24}
        height={24}
        className="w-20 h-6"
      />
    </Link>
  )
}

export default Logo 