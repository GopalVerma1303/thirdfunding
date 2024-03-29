import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsFillEnvelopeFill } from 'react-icons/bs'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className=' sticky top-0 flex items-center justify-between xl:items-center text-[#808191]'>
            <motion.div className='flex flex-row items-center gap-5'
                initial={{
                    x: -10,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >

                <a href="https://www.facebook.com/profile.php?id=100067485754453" target="_blank">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/bettercallgopal" target="_blank" >
                    <BsInstagram />
                </a>
                <a href="https://twitter.com/bettercallgopal" target="_blank" >
                    <BsTwitter />
                </a>
                <a href='https://www.linkedin.com/in/gopal-verma-a99b001b0' target="_blank" >
                    <BsLinkedin />
                </a>
                <a href='https://github.com/gopalverma1303' target="_blank" >
                    <BsGithub />
                </a>
            </motion.div>
            <motion.div
                initial={{
                    x: 10,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <a href='mailto:vgopaldps@gmail.com' target="_blank" className='flex items-center gap-2'>
                    <BsFillEnvelopeFill />
                    <p className='font-bold hidden sm:inline-flex text-sm'>GET IN TOUCH</p>
                </a>
            </motion.div>
        </header>
    )
}

export default Header