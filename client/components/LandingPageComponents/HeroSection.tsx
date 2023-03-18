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
        <div className=' -mt-28 sm:m-0 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <h1>
                <span className='text-[28px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>{text}</span>
                <Cursor cursorStyle='_' cursorColor="#d30384" />
            </h1>
        </div>
    )
}

export default HeroSection