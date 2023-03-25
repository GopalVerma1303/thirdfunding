import React from 'react';
import Image from 'next/image';

interface Props {
    message: string,
    sender: string,
    imageUrl: string,
    created_at: number
}
const ChatMessage = ({ message, sender, imageUrl, created_at }: Props) => {
    const user = "Gopal Verma"
    return (
        <div className={`flex w-full my-2 ${sender == "Gopal Verma" && "justify-end ml-auto"}`}>
            <div className={`flex-shrink-0 ${sender == "Gopal Verma" && "order-2"}`}>
                <img
                    className='rounded-full mx-2'
                    height={30}
                    width={30}
                    src={imageUrl}
                    alt="Profile Picture"
                />
            </div>

            <div>
                <p className={`text-[0.65rem] px-[2px] pb-[2px] font-bold ${sender == "Gopal Verma" ? " text-[#4ACD8D]" : "text-[#8c6dfd]  "}`}>{sender}</p>
                <div className='items-end'>
                    <div className={`px-3 py-2 rounded-lg w-fit text-white ${sender == "Gopal Verma" ? " bg-[#4ACD8D]" : "bg-[#8c6dfd]  "}`} >
                        <p>{message}</p>
                    </div>
                    <p className={`text-[0.65rem] italic px-2 text-gray-500 ${sender == "Gopal Verma" && "order-2"}`}>{new Date(created_at).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;