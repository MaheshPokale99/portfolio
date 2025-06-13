"use clinet"
import { div } from 'framer-motion/client'
import React from 'react'

const LightSource = () => {
  return (
    <div className='relative'>
    <div className='absolute left-[503px] right-[503px] -top-[393px] bottom-[1577px] w-[778px] h-[693px] opacity-[0.13] origin-left bg-radial-[FFFFFF]/60 z-1'></div>
    <div className='absolute left-[462px] right-[457px] -top-[252px] bottom-[1146px] w-[865px] h-[929px] opacity-[0.13] origin-left bg-radial-[FFFFFF]/60 z-1'></div>
    <div className='absolute left-[293px] right-[293px] -top-[352px] -bottom-[46px] w-[778px] h-[693px] opacity-[0.13] origin-left bg-radial-[FFFFFF]/60 z-1'></div>
    <div className='absolute w-3.5 h-[2297px] -top-[353px] -bottom-[121px] right-[891px left-[871px] bg-[#ffffff]/60 rotate-z-6 opacity-20'></div>
    </div>


  )
}

export default LightSource