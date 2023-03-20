import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import FundCard from './FundCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const router = useRouter();
    const handleNavigate = (campaign) => {
        // navigate(`/campaign-details/${campaign.title}`, { state: campaign })
        router.push('CampaignDetails')
    }

    const campaignCards = [];
    if (!isLoading && campaigns.length > 0) {
        for (let i = 0; i < campaigns.length; i++) {
            const campaign = campaigns[i];
            campaignCards.push(
                <Link href={{ pathname: `CampaignDetails/${i}` }}>
                    <FundCard
                        key={campaign.id}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />
                </Link>
            );
        }
    }

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>
            <div className="flex flex-wrap mt-[20px] gap-[26px]">

                {isLoading && (
                    <div className='absolute left-0 top-0 w-full flex justify-center items-center h-screen'>
                        <SpinnerCircular enabled={true} className="text-[#4acd8d] " />
                    </div>
                )}

                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                        You have not created any campigns yet
                    </p>
                )}

                {campaignCards}
                {/* {isLoading && <p>Loading campaigns...</p>} */}
                {/* {campaigns.length === 0 && <p>No campaigns found.</p>} */}

                {/* {!isLoading && campaigns.length > 0 && campaigns.map((campaign) =>
                    <Link href={{ pathname: `CampaignDetails/${campaign.postId}` }}
                    >
                        <FundCard
                            key={campaign.id}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)}
                        />
                    </Link>
                )} */}

            </div>
        </div>
    )
}

export default DisplayCampaigns