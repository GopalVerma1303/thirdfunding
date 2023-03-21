import React from 'react'
import FormField from '../FormField'
import MessageFormField from './MessageFormField'
import { HiArrowLeft } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";

function ChatView() {
    function handleFormFieldChange(arg0: string, e: any): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div className=' w-full h-full bg-[#2d2d39] md:rounded-r-[10px] overflow-y-scroll scrollbar-none flex flex-col'>
            <div className='w-full top-0 relative p-1 bg-[#3e3e4e] flex items-center'>
                <HiArrowLeft className='mx-5  text-[20px] text-[#808191] md:hidden' />
                <div className="bg-[#3e3e4e] rounded-lg flex justify-start items-center p-2 gap-2 hover:cursor-pointer">
                    <div>
                        <img
                            className="rounded-full h-[30px] w-[30px]"
                            src={"https://wallpaperaccess.com/full/333537.jpg"}
                            alt={`Avatar of Gopal Verma`}
                        // alt={`Avatar of ${name}`}
                        />
                    </div>
                    <div>
                        <p className="text-[15px] text-[#b2b4c9] font-bold">Gopal Verma</p>
                        {/* <p className="text-[13px] text-[#808191] font-bold">{name}</p> */}
                    </div>
                </div>
            </div>
            <div className=' flex flex-col overflow-y-scroll text-white px-3 '>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
                <p>Gopal</p>
            </div>
            <div className='w-full top-0 relative bg-[#3e3e4e]'>
                <form className='flex items-center mx-5'>
                    <MessageFormField
                        lableName="Your Name *"
                        placeholder="Write your message"
                        inputType="text"
                        value=""
                        handleChange={(e) => handleFormFieldChange("name", e)}
                        isTextArea={false} />
                    <FaTelegramPlane className='mx-5 text-[25px] text-[#808191] hover:cursor-pointer'/>
                </form>
            </div>
        </div>
    )
}

export default ChatView