import React from 'react'
import { BsFacebook, BsFillEnvelopeFill, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Contacts() {
    return (
        <div
            // initial={{ opacity: 0 }}
            // whileInView={{ operator: 1 }}
            // transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center"
        >
            <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                {/* <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'> */}
                contacts
            </h3>
            <div className='space-y-5 sm:space-y-0 sm:flex sm:gap-10 gap-2 items-center justify-between xl:items-center text-[#808191] text-[50px]'>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100067485754453" target="_blank">
                        <BsFacebook />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/bettercallgopal" target="_blank" >
                        <BsInstagram />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/bettercallgopal" target="_blank" >
                        <BsTwitter />
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/gopal-verma-a99b001b0' target="_blank" >
                        <BsLinkedin />
                    </a>
                </div>
                <div>
                    <a href='https://github.com/gopalverma1303' target="_blank" >
                        <BsGithub />
                    </a>
                </div>
                <div>
                    <a href='mailto:vgopaldps@gmail.com' target="_blank">
                        <BsFillEnvelopeFill />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts