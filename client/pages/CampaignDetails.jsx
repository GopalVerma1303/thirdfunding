import React from 'react'
import { useRouter } from 'next/router'

function CampaignDetails() {
    const router = useRouter()
    const { state } = router.query
    const data = state ? JSON.parse(state) : null
    return (
        <div className='text-white'>{data?.title}</div>
    )
}

export default CampaignDetails