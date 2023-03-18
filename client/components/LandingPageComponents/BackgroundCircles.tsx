import { motion } from 'framer-motion'
import React from 'react'

function BackgroundCircles() {
    return (
        <motion.div className='relative flex justify-center items-center -mt-10 sm:mt-0'
            initial={{
                opacity: 0
            }}
            animate={{

                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 1.5
            }}
        >
            <div className='absolute border border-[#D30384] rounded-full h-[150px] w-[150px] sm:h-[400px] sm:w-[400px] mt-0 animate-ping' />
            <div className='rounded-full border border-[#D30384] opacity-20 sm:h-[400px] sm:w-[400px] h-[150px] w-[150px] absolute mt-0' />
            <div className='rounded-full border border-[#D30384] opacity-20 sm:h-[600px] sm:w-[600px] h-[300px] w-[300px] absolute mt-0' />
            <div className='rounded-full border border-[#8c6dfd] opacity-20 sm:h-[750px] sm:w-[750px] absolute mt-0' />
            <div />
        </motion.div>
    )
}

export default BackgroundCircles