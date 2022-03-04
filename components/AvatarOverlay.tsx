import React from 'react'

const AvatarOverlay = () => {
  return (
    <div className='absolute -z-10 top-0 inset-y-4  right-0 flex justify-center
    overflow-hidden pointer-events-none hidden md:block'>
        <div className='mt-[300px]'>
            <img className='bg-blend-color' src="/assets/images/Bust.png" alt="" />
        </div>
    </div>
  )
}

export default AvatarOverlay