import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

function HeroSection() {
    const [text, count] = useTypewriter({
        words: [
            "Thirdfunding",
            "Decentralized Crowdfunding"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='-mt-24 sh:m-0 h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
            <div className='z-20'>
                <BackgroundCircles />
                <img src='/thirdfundinglogo_bg_removed.png' className='relative h-[100px] w-[100px] mx-auto object-cover' />
                <h2 className=' text-[12px] sm:text-sm uppercase text-gray-500 sm:pb-10 pb-5 tracking-[15px]'>
                    welcome to
                </h2>
                <h1 className='text-5xl lg:text-6xl sm:px-10 font-semibold'>
                    <span className='sm:text-[60px] text-[40px]  font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>{text}</span>
                    <Cursor cursorStyle='_' cursorColor="#d30384" />
                </h1>
                <div className='pt-12 space-x-2'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#features">
                        <button className='heroButton'>Features</button>
                    </Link>
                    <Link href="#poweredby">
                        <button className='heroButton'>Powered by</button>
                    </Link>
                    <Link href="#contacts">
                        <button className='heroButton'>Contact us</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSection