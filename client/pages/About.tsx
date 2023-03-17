import React from 'react'
import AboutIntroOutroTile from '../components/AboutIntroOutroTile'
import AboutSectionTile from '../components/AboutSectionTile'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function About() {
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">About</h1>
      <div className="flex flex-wrap mt-10 text-white justify-center sm:justify-start">
        <p className='mt-[4px] font-epilogue font-normal text-[12px] text-[#808191] flex items-center break-all'>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>

        <div className='flex-col space-y-5 my-20 '>
          <a href="https://www.facebook.com/profile.php?id=100067485754453" target="_blank" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded cursor-pointer">
            <BsFacebook /> Follow me on Facebook
          </a>
          <a href="https://www.instagram.com/bettercallgopal" target="_blank" className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 py-1 px-4 rounded-md text-white hover:opacity-75 font-bold flex items-center gap-2 cursor-pointer">
            <BsInstagram /> Follow me on Instagram
          </a>
          <a href="https://twitter.com/bettercallgopal" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2 cursor-pointer">
            <BsTwitter /> Follow me on Twitter
          </a>
          <a href='https://www.linkedin.com/in/gopal-verma-a99b001b0' target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2 cursor-pointer">
            <BsLinkedin /> Follow me on LinkedIn
          </a>
          <a href='https://github.com/gopalverma1303' target="_blank" className="bg-black hover:bg-gray-900 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline border-lg flex items-center gap-2 cursor-pointer">
            <BsGithub /> Follow me on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default About