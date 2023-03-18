import { motion } from 'framer-motion'
import React from 'react'

function AboutSection() {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center'>
            <div>
                <h3 className=' top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                    About
                </h3>
            </div>
            <div className=' text-center flex-col md:flex-row space-y-10 px-0 md:px-10 w-[300px] md:w-[600px] xl:w-[900px]'>
                <h4 className='text-4xl font-semibold text-white'>
                    Here is a{" "}
                    <span className='underline decoration-[#8C6DFD]'>little</span>{" "}
                    background
                </h4>
                <p className='text-white text-base text-center'>
                    Welcome to our decentralized crowdfunding platform! Our platform is designed to provide a secure and transparent way to create and support campaigns that matter to you.
                    At our decentralized crowdfunding platform, we're committed to providing a secure and transparent way to create and support campaigns that matter to you. We believe that everyone has the power to make a difference, and we're here to help you do just that. Join us today and start making a positive impact in your community!
                </p>
            </div>
        </div>
    )
}

export default AboutSection