import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import FundCard from './FundCard';
import { loader } from '../assets';
import { loading } from '../assets/loading.gif';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const router = useRouter();
    const handleNavigate = (campaign) => {
        // navigate(`/campaign-details/${campaign.title}`, { state: campaign })
        router.push('CampaignDetails')
    }

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">

                {isLoading && (
                    <SpinnerCircular enabled={true} className="text-[#4acd8d]" />
                )}

                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                        You have not created any campigns yet
                    </p>
                )}

                {!isLoading && campaigns.length > 0 && campaigns.map((campaign) =>
                    <Link href={{ pathname: 'CampaignDetails', query: { state: JSON.stringify(campaign) } }}
                    >
                        <FundCard
                            key={campaign.id}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)}
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default DisplayCampaigns