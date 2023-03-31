import React from 'react'
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
// import { MdHomeFilled } from "react-icons/md";
import { MdFlag } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdNewspaper } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
// import { MdOutlineHandyman } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { SiBitcoin } from "react-icons/si";
import styles from '../../styles/custom-styles.css'

function FeaturesSection() {
    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // whileInView={{ operator: 1 }}
            // transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center"
        >
            <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'>
                {/* <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-[15px] sm:text-[20px]'> */}
                Features
            </h3>
            <div className=' w-[300px] md:w-[600px] xl:w-[900px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <FeatureCard
                    Icon={MdAccountBalanceWallet}
                    title="Wallet"
                    description="We support multiple wallet connections, including Metamask, Coinbase Wallet, and WalletConnect, making it easy for you to donate to campaigns using your preferred wallet."
                />
                <FeatureCard
                    Icon={MdExplore}
                    title="Explore"
                    description="Our platform allows you to explore campaigns that align with your interests. Whether you're passionate about the environment, social justice, or technology, you can find a campaign that resonates with you."
                />
                <FeatureCard
                    Icon={SiBitcoin}
                    title="Donate"
                    description="We make it easy for you to support campaigns that matter to you. With just a few clicks, you can make a donation to any campaign on our platform. We support a variety of payment methods, including cryptocurrency, to make it as easy as possible for you to support your favorite campaigns."
                />
                <FeatureCard
                    Icon={MdFlag}
                    title="Start"
                    description="If you have a cause that you're passionate about, you can create a new campaign on our platform. Our user-friendly interface allows you to easily create a campaign, set a funding goal, and provide updates to your supporters."
                />
                <FeatureCard
                    Icon={MdGroups}
                    title="Community"
                    description="Our platform is more than just a place to donate. We also provide a forum for people to connect, discuss, and collaborate on issues that matter to them. You can join the conversation and connect with people who share your interests."
                />
                <FeatureCard
                    Icon={MdNewspaper}
                    title="News"
                    description="Our news section covers a broad range of topics related to cryptocurrencies, including updates on major cryptocurrencies such as Bitcoin, Ethereum, and Litecoin, as well as new and emerging cryptocurrencies that are gaining traction in the market. We also cover news related to blockchain technology, decentralized finance (DeFi), and the broader crypto ecosystem."
                />
                <FeatureCard
                    Icon={MdPerson}
                    title="Profile"
                    description="Our platform allows you to view your profile and track your campaign activity. You can see your account balance, create new campaigns, and view campaigns you have donated to. Our user-friendly interface makes it easy to keep track of your activity and stay informed."
                />
                <FeatureCard
                    Icon={MdWbSunny}
                    title="Theme"
                    description="We understand that people have different preferences when it comes to the look and feel of a website. That's why we offer a day/night theme option, allowing you to choose the mode that best suits your needs."
                />
            </div>
        </motion.div>
    )
}

export default FeaturesSection