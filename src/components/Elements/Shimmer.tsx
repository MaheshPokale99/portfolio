import React from 'react'

const Shimmer = () => {
  return (
    <div className='w-[100px] h-[1px] bg-gradient-to-t from-white/60  to-white/20 rounded-[2px] 'style={{transition: "all 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s"}}></div>
  )
}

export default Shimmer