import React from 'react'
import Image from 'next/image'


function PoweredBySection() {
    return (
        <div
            // initial={{ opacity: 0 }}
            // whileInView={{ operator: 1 }}
            // transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center"
        >
            <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                {/* <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'> */}
                powered by
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                <a href='https://polygon.technology/'>
                    <Image src="/polygonlogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://www.coinbase.com/'>
                    <Image className='rounded-full' src="/coinbaselogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://gun.eco/'>
                    <Image className=' rounded-full ' src="/firebaselogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://mediastack.com/'>
                    <Image className='rounded-full' src="/mediastacklogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://metamask.io/'>
                    <Image className='rounded-full' src="/metamasklogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://nextjs.org/'>
                    <Image className='rounded-full' src="/nextjslogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://tailwindcss.com/'>
                    <Image className='rounded-full' src="/tailwindcsslogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://thirdweb.com/'>
                    <Image src="/thirdweb.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://www.solidity.io/'>
                    <Image className='rounded-full' src="/soliditylogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://walletconnect.com/'>
                    <Image className='rounded-full' src="/walletconnect.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://hardhat.org/'>
                    <Image className='rounded-full' src="/hardhatlogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
                <a href='https://www.infura.io/'>
                    <Image className='rounded-full' src="/infuralogo.png" width={100} height={100} alt={'Thirdfunding'} />
                </a>
            </div>
        </div >
    )
}

export default PoweredBySection