"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={24}
                height={24}
                className="w-30 h-6"
            />
            <Image
                src="/mahesh.svg"
                alt="Mahesh"
                width={24}
                height={24}
                className="w-30 h-7 -translate-x-23 lg:-translate-x-19 -translate-y-1"
            />

        </Link>
    )
}
export default Logo;