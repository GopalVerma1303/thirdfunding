import { motion } from 'framer-motion'
import React from 'react'

function AboutSection() {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                About
            </h3>
            {/* <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='/thirdfundinglogo.png'
                className='-mt-32 sm:mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-xl sm:rounded-[100px] object-cover md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
            /> */}
        </div>
    )
}

export default AboutSection