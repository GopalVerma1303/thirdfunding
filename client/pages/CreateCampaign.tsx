import React, { useState } from 'react';
import { ethers } from "ethers";
import CustomButton from '../components/CustomButton';

function CreateCampaign() {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        title: "",
        description: "",
        target: "",
        deadline: "",
        image: ""
    });

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10'>CreateCampaign</div>
    )
}

export default CreateCampaign