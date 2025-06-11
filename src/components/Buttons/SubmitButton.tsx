"use client"

import React from 'react'

interface SubmitButtonProps {
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    text = "Send Message",
    onClick,
    type = "submit",
    disabled = false,
    isLoading = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`
                relative w-[240px] h-[45px] flex items-center justify-center
                text-[15px] font-normal text-black/90
                transition-all duration-300 ease-in-out
                overflow-hidden rounded-[100px]
                disabled:opacity-70 disabled:cursor-not-allowed
            `}
            style={{
                background: 'linear-gradient(180deg, rgba(250,250,250,1), rgba(250,250,250,0.3))',
                boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.07)',
            }}
        >
            <span className="relative z-10">
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                    text
                )}
            </span>
        </button>
    )
}

export default SubmitButton