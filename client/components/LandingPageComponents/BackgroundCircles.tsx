import { motion } from 'framer-motion'
import React from 'react'

function BackgroundCircles() {
    return (
        <motion.div className=' -z-10 relative flex justify-center items-center'
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
            <div className='absolute border border-[#D30384] rounded-full h-[200px] w-[200px]  animate-ping mt-52' />
            <div className='rounded-full border border-[#D30384] opacity-0  h-[300px] w-[300px] absolute mt-52' />
            <div className='rounded-full border border-[#D30384] opacity-20  h-[500px] w-[500px] absolute mt-52' />
            <div className='rounded-full border border-[#8c6dfd] opacity-20 h-[650px] w-[650px] absolute mt-52' />
            <div className='rounded-full border border-[#8c6dfd] opacity-20 h-[800px] w-[800px] absolute mt-52' />
            <div />
        </motion.div>
    )
}

export default BackgroundCircles