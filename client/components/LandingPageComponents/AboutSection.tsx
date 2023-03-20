import React from 'react'

function AboutSection() {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center'>
            <div>
                <h3 className=' top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                    About
                </h3>
            </div>
            <div className=' w-[300px] md:w-[600px] xl:w-[900px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                {/* background */}
                <div className=' flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center 
         hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <h4 className='text-4xl font-semibold text-white'>
                        Here is a{" "}
                        <span className='underline decoration-[#8C6DFD]'>little</span>{" "}
                        background
                    </h4>
                    <p className='text-white text-[12px] w-[600px] sm:text-base text-center'>
                        ThirdFunding is a decentralized crowdfunding platform that operates on blockchain technology. It provides a platform for individuals and organizations to raise funds for their projects without the need for intermediaries like banks or financial institutions. This platform is built on the Ethereum blockchain and uses smart contracts to manage the funding process, ensuring transparency and security.
                    </p>
                </div>
                {/* problem solved */}
                <div className=' flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center 
         hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <h4 className='text-4xl font-semibold text-white'>
                        Here are the {" "}
                        <span className='underline decoration-[#8C6DFD]'>problems</span>{" "}
                        it solves
                    </h4>
                    <p className='text-white text-[12px] w-[600px] sm:text-base text-center'>
                        Lowering barriers to entry by allowing anyone to participate in crowdfunding campaigns, regardless of their location or financial status.
                        Reducing reliance on intermediaries, such as banks or financial institutions, which can add costs and delays to the crowdfunding process.
                        Providing greater transparency and security through the use of blockchain technology and smart contracts.                    </p>
                </div>
                {/* utility */}
                <div className=' flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center 
         hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <h4 className='text-4xl font-semibold text-white'>
                        Here is{" "}
                        <span className='underline decoration-[#8C6DFD]'>how</span>{" "}
                        it's useful
                    </h4>
                    <p className='text-white text-[12px] w-[600px] sm:text-base text-center'>
                        Decentralized crowdfunding apps can be used for a variety of purposes, including fundraising for non-profits, supporting creative projects, and launching new startups. They can provide a more democratic and transparent way for individuals and organizations to raise funds, while also reducing transaction costs and increasing security. Additionally, decentralized crowdfunding platforms can help to democratize investment opportunities by allowing anyone to invest in early-stage startups and gain access to potential high returns.                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutSection