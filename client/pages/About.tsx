import React from 'react'
import AboutIntroOutroTile from '../components/AboutIntroOutroTile'
import AboutSectionTile from '../components/AboutSectionTile'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SocialIcon } from 'react-social-icons';

function About() {
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">About</h1>
      <div className="flex flex-wrap mt-10 text-white justify-center sm:justify-start space-y-5">
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          Hi 👋, I'm Gopal Verma, a full-stack developer based in India. I am deeply passionate about web and app development and have honed my skills in a variety of programming languages and frameworks.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          My experience with languages includes C, C++, Java, JavaScript, TypeScript, HTML, CSS, Python, and SQL. I am confident in my ability to work with each of these languages to create efficient and effective code. Additionally, I have experience working with various frameworks, such as Bootstrap, React.js, Next.js, Tailwind CSS, React-Native, Nativewind, Node.js, Express.js, and Flask.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          One of my strengths as a developer is my ability to quickly learn new technologies. I am constantly expanding my knowledge base and staying up-to-date with the latest advancements in the industry. This allows me to be highly adaptable and to bring innovative solutions to the table.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          As a problem solver, I am highly skilled in identifying and addressing technical challenges. I take a collaborative approach to development, working closely with other team members to create high-quality code that meets the needs of our clients.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          I am eager to join a team of talented developers and contribute to the creation of world-class cross-platform apps. Whether it's working on front-end development, back-end development, or the integration of APIs, I am committed to delivering exceptional results.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          In terms of storages, I have experience working with NoSQL databases like MongoDB and Firebase, as well as SQL databases like nHost and Supabase. I am also skilled in working with APIs such as REST and GraphQL.
        </p>
        <p className='mt-[4px] font-epilogue font-normal text-[15px] text-[#808191] flex items-center break-word'>
          Overall, my passion for web and app development combined with my strong problem-solving skills and ability to learn quickly make me a valuable asset to any development team. I am excited to continue expanding my knowledge and skill set while contributing to the creation of innovative and impactful applications.
        </p>
      </div>
      <div className='flex-col space-y-5 my-20 '>
        <a href="https://www.facebook.com/profile.php?id=100067485754453" target="_blank" className="justify-center flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded cursor-pointer">
          <BsFacebook /> Follow me on Facebook
        </a>
        <a href="https://www.instagram.com/bettercallgopal" target="_blank" className="justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 py-1 px-4 rounded-md text-white hover:opacity-75 font-bold flex items-center gap-2 cursor-pointer">
          <BsInstagram /> Follow me on Instagram
        </a>
        <a href="https://twitter.com/bettercallgopal" target="_blank" className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2 cursor-pointer">
          <BsTwitter /> Follow me on Twitter
        </a>
        <a href='https://www.linkedin.com/in/gopal-verma-a99b001b0' target="_blank" className="justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2 cursor-pointer">
          <BsLinkedin /> Follow me on LinkedIn
        </a>
        <a href='https://github.com/gopalverma1303' target="_blank" className="justify-center bg-black hover:bg-gray-900 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline border-lg flex items-center gap-2 cursor-pointer">
          <BsGithub /> Follow me on GitHub
        </a>
      </div>

      {/* <div className='bottom-0 justify-center items-center self-center w-full'>
        <SocialIcon url='https://www.facebook.com/profile.php?id=100067485754453' fgColor='#808191' bgColor='transparent' />
        <SocialIcon url='https://www.instagram.com/bettercallgopal' fgColor='#808191' bgColor='transparent' />
        <SocialIcon url='https://twitter.com/bettercallgopal' fgColor='#808191' bgColor='transparent' />
        <SocialIcon url='https://www.linkedin.com/in/gopal-verma-a99b001b0' fgColor='#808191' bgColor='transparent' />
        <SocialIcon url='https://github.com/gopalverma1303' fgColor='#808191' bgColor='transparent' />
      </div> */}

    </div>
  )
}

export default About