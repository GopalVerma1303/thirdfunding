import React, { useContext, createContext, useEffect } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite, useContractMetadata } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const { contract } = useContract('0x6F42d7a993BCd27854ff6de9827e579397dc51F1');
    const address = useAddress();
    const connect = useMetamask();
    const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign");
    const { data: contractMetadata, isLoading } = useContractMetadata(contract);

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.category,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }


    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');
        console.log(campaigns);
        const parsedCampaings = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }));

        return parsedCampaings;
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCampaign,
                getCampaigns,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);