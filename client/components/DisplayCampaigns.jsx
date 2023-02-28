import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import FundCard from './FundCard';
import { loader } from '../assets';
import { loading } from '../assets/loading.gif';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {


    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
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

                {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard
                    key={campaign.id}
                    {...campaign}
                    handleClick={() => handleNavigate(campaign)}
                />)}
            </div>
        </div>
    )
}

export default DisplayCampaigns