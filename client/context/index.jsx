import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x6F42d7a993BCd27854ff6de9827e579397dc51F1')
    const address = useAddress();
    const connect = useMetamask();
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign(
                address,
                form.title,
                form.description,
                form.category,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            )
            console.log("Contract call success", data);
        } catch (error) {
            console.log("Contract call faileur", error);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);