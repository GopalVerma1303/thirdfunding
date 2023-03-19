import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaigns from '../components/DisplayCampaigns'


function Explore() {

    const [isLoading, setIsLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);
    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
        console.log(data);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />)
}

export default Explore