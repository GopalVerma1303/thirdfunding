import React from 'react'

function BackgroundCircles() {
    return (
        <div className='relative flex justify-center items-center '>
            <div className='absolute border border-[#D30384] rounded-full h-[150px] w-[150px] sm:h-[350px] sm:w-[350px] mt-20 animate-ping' />
            <div className='rounded-full border border-[#D30384] opacity-20 sm:h-[300px] sm:w-[300px] h-[150px] w-[150px]  absolute mt-20' />
            <div className='rounded-full border border-[#D30384] opacity-20 sm:h-[500px] sm:w-[500px] h-[300px] w-[300px] absolute mt-20' />
            <div className='rounded-full border border-[#8c6dfd] opacity-20 sm:h-[650px] sm:w-[650px] absolute mt-20' />
            <div />
        </div>
    )
}

export default BackgroundCircles