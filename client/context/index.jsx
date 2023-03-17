import React, { useContext, createContext, useEffect } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite, useContractMetadata, useBalance } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const { contract } = useContract('0xc1847E7573c689215e40230749ab1c7728073E22');
    const address = useAddress();
    const connect = useMetamask();
    const balance = useBalance();
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
            postId: campaign.postId,
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

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();

        const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

        return filteredCampaigns;
    }

    const donate = async (pId, amount) => {
        const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });
        return data;
    }

    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators', pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }

    return (
        <StateContext.Provider
            value={{
                address,
                balance,
                contract,
                connect,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);