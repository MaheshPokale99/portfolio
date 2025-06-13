"use client"

import React, { ChangeEvent } from 'react'

interface InputFieldProps {
    placeholder: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'number';
    isTextarea?: boolean;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    label,
    type = 'text',
    isTextarea = false,
    value,
    onChange,
    required = false,
    name
}) => {
    const commonClasses = `
        w-full bg-[#FFFFFF]/3 text-white/90 
        rounded-[10px] p-[15px]
        px-4 outline-none
        placeholder:text-[#787878] transition-colors
        hover:border-white/30
    `

    return (
        <div className='w-full flex flex-col gap-3 mb-6'>
            <label 
                htmlFor={name}
                className='text-[12px] leading-[1.8px] text-white/60'
            >
                {label}
                {required && <span className='text-red-500 ml-1'>*</span>}
            </label>

            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`${commonClasses} h-[120px] py-3 resize-none`}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`${commonClasses} h-[50px]`}
                />
            )}
        </div>
    )
}

export default InputField