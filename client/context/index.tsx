import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }: any) => {
    const { contract } = useContract('0x6F42d7a993BCd27854ff6de9827e579397dc51F1');
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign")
    const address = useAddress();
    const connect = useMetamask();
    const publishCampaign = async (form: { title: unknown; description: unknown; target: unknown; deadline: string | number | Date; image: unknown; }) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])
            console.log("Contract call successful", data);
        } catch (error) {
            console.log("Contract call failed", error);
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