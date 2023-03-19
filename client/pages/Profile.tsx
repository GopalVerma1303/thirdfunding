import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaigns from '../components/DisplayCampaigns'

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns, getUserCampaigns } = useStateContext();
  const fetchCampaigns = async () => {
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
    console.log(data);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <DisplayCampaigns
      title="Your Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile