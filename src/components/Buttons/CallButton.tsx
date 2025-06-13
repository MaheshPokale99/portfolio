import React from 'react'
import {motion} from "framer-motion"

const CallButton = ({name}) => {
  return (
    <motion.div className='flex flex-row justify-center items-center flex-nowrap gap-[10px] px-[26px] py-[13px] w-[169px] h-[58px]'>
        <p className='text-[16px] leading-0.5 text-[0A0A0A] w-auto h-fit'>{name}</p>
    </motion.div>
  )
}

export default CallButton