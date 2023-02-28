import React, { useState, useContext } from 'react';
import { ethers } from "ethers";
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';
import { SiBitcoin } from "react-icons/si";
import { checkIfImage } from '../utils';
import { useNavigate } from 'react-router-dom';
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";

function Start() {

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
    target: "",
    deadline: "",
    image: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await call({ ...form, target: ethers.utils.parseUnits(form.target, 18) });
    // checkIfImage(form.image, async (exists) => {
    //   if (exists) {
    //     setIsLoading(true);
    //     await call({ ...form, target: ethers.utils.parseUnits(form.target, 18) });
    //     setIsLoading(false);
    //   } else {
    //     alert("Provide valid image URL")
    //     setForm({ ...form, image: '' });
    //   }
    // })
  }

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const { contract } = useContract("0x6F42d7a993BCd27854ff6de9827e579397dc51F1");
  const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign");
  const address = useAddress();

  const call = async (form) => {
    try {
      const data = await createCampaign([address, form.title, form.description, form.category, form.target, new Date(form.deadline).getTime(), form.image]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] p-10'>
      {isLoading && 'Loading...'}
      <div className='flex justify-center item-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]' >
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
          Start Campaign
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            lableName="Your Name *"
            placeholder="Write your name"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
            isTextArea={false} />

          <FormField
            lableName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
            isTextArea={false} />

          <FormField
            lableName="Story *"
            placeholder="Write your story"
            inputType="text"
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
            isTextArea={true} />

          <FormField
            lableName="Category *"
            placeholder="Select category for your campaign"
            inputType="text"
            value={form.category}
            handleChange={(e) => handleFormFieldChange("category", e)}
            isTextArea={false} />

          <div className='w-full flex justify-start items-center p-4 sm:pl-10 bg-[#8c6dfd] h-[120px] rounded-[10px]'>
            <SiBitcoin className='text-white w-16 h-16 object-contain' />
            <h4 className='font-epilogue font-bold sm:text-[25px] text-[15px] text-white ml-[20px]'>You will get 100% of the raised amount !</h4>
          </div>

          <FormField
            lableName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
            isTextArea={false} />

          <FormField
            lableName="End Date *"
            placeholder=""
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
            isTextArea={false} />

          <FormField
            lableName="Campaign Image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
            isTextArea={false} />

          <div className='flex justify-center items-center mt-[40px]'>
            <CustomButton btnType="submit" title="Submit new campaign" handleClick={handleSubmit} styles="bg-[#1dc071]" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Start