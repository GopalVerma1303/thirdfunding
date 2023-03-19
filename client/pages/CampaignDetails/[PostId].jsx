import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers';
import { useRouter } from 'next/router'
import { useStateContext } from '../../context';
import CountBox from '../../components/CountBox';
import CustomButton from '../../components/CustomButton';
import Loader from '../../components/Loader';
import { SpinnerCircular } from 'spinners-react';
import { calculateBarPercentage, daysLeft } from '../../utils';
import { thirdweb } from '../../assets';
import { useContract } from "@thirdweb-dev/react";
import Web3 from 'web3';

function CampaignDetails() {
    const router = useRouter()
    const { PostId } = router.query
    // const data = PostId ? JSON.parse(PostId) : null

    const { donate, getDonations, address, getCampaignsByPostId, contract } = useStateContext();
    const [campaign, setCampaign] = useState({})
    // const { contract } = useContract('0xc1847E7573c689215e40230749ab1c7728073E22');
    const [fetchedContract, setFetchedContract] = useState();

    const [target, setTarget] = useState();
    const [amountCollected, setAmountCollected] = useState();
    const [deadline, setDeadline] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);

    const remainingDays = daysLeft(deadline);

    const fetchDonators = async () => {
        const data = await getDonations(PostId);
        setDonators(data);
    }

    useEffect(() => {
        if (contract) fetchDonators();
    }, [contract, address])


    const handleDonate = async () => {
        setIsLoading(true);
        await donate(PostId, amount);
        router.push('/Explore')
        setIsLoading(false);
    }

    const fetchCampaignById = async (postId) => {
        setIsLoading(true);
        const campaign = await contract.call('getCampaignsById', postId);
        setCampaign(campaign);
        console.log(campaign);
        const t = Web3.utils.toBN(campaign.target._hex);
        const a = Web3.utils.toBN(campaign.amountCollected._hex);
        const d = Web3.utils.toBN(campaign.deadline._hex);
        setTarget(parseInt(t.toString()))
        setAmountCollected(parseInt(a.toString()))
        setDeadline(parseInt(d.toString()))
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) {
            fetchCampaignById(PostId);
        }
    }, [contract])

    return (
        <div>
            {
                isLoading ? (<>
                    <div className='absolute left-0 top-0 w-full flex justify-center items-center h-screen'>
                        <SpinnerCircular enabled={true} className="text-[#4acd8d] " />
                    </div>
                </>) :
                    (
                        <>
                            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{campaign.title} <span className='text-[#575863]'>{'('}{campaign.category}{')'}</span></h1>

                            <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">

                                <div className="flex-1 flex-col">
                                    <img src={campaign.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />
                                    <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
                                        <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(target, amountCollected)}%`, maxWidth: '100%' }}>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
                                    <CountBox title="Days Left" value={remainingDays} />
                                    <CountBox title={`Raised of ${target / 1000000000000000000} ETH`} value={amountCollected / 1000000000000000000} />
                                    {/* <CountBox title="Total Backers" value={donators.length} /> */}
                                    <CountBox title="Total Backers" value={10} />
                                </div>
                            </div>

                            <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
                                <div className="flex-[2] flex flex-col gap-[40px]">
                                    <div>
                                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Creator</h4>

                                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                                            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                                                <img src="/thirdfundinglogo_bg_removed.png" alt="user" className="w-[80%] h-[80%] object-contain" />
                                            </div>
                                            <div>
                                                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{campaign.owner}</h4>
                                                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Story</h4>

                                        <div className="mt-[20px]">
                                            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{campaign.description}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Donators</h4>

                                        <div className="mt-[20px] flex flex-col gap-4">
                                            {donators.length > 0 ? donators.map((item, index) => (
                                                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                                                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all ">{index + 1}. {item.donator}
                                                        {" - "}<span className="font-epilogue font-normal text-[16px] text-[#8C6DFD] leading-[26px] break-all">{item.donation}</span>
                                                    </p>

                                                </div>
                                            )) : (
                                                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>

                                    <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
                                        <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
                                            Fund the campaign
                                        </p>
                                        <div className="mt-[30px]">
                                            <input
                                                type="number"
                                                placeholder="ETH 0.1"
                                                step="0.01"
                                                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />

                                            <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                                                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                                                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
                                            </div>

                                            <CustomButton
                                                btnType="button"
                                                title="Fund Campaign"
                                                styles="w-full bg-[#8c6dfd]"
                                                handleClick={handleDonate}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default CampaignDetails