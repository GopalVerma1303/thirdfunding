import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x6F42d7a993BCd27854ff6de9827e579397dc51F1");
    const address = useAddress();
    const connect = useMetamask();
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign");

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([address, "_title", "_description", "_category", 0.5, 23456123, "_image"]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);