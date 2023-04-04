import React from 'react';
import Image from 'next/image';
import Avatar from 'react-avatar';


const ChatMessage = ({ username, message, sender, imageUrl, created_at }) => {
    const user = "Gopal Verma"
    return (
        <div className={`flex w-full my-2 ${sender === username && "justify-end ml-auto"}`}>
            <div className={`flex-shrink-0 ${sender === username && "order-2"}`}>
                {/* <img
                    className='rounded-full mx-2'
                    height={30}
                    width={30}
                    src={imageUrl}
                    alt="Profile Picture"
                /> */}
                <Avatar name={username} size="30" round maxInitials={2} className='mx-2' />
            </div>

            <div>
                <p className={`text-[0.65rem] px-[2px] pb-[2px] font-bold ${sender === username ? " text-[#4ACD8D]" : "text-[#8c6dfd]  "}`}>{sender}</p>
                <div className='items-end'>
                    <div className={`px-3 py-2 rounded-lg w-fit text-white ${sender === username ? " bg-[#4ACD8D]" : "bg-[#8c6dfd]  "}`} >
                        <p>{message}</p>
                    </div>
                    <p className={`text-[0.65rem] italic px-2 text-gray-500 ${sender === username && "order-2"}`}>{new Date(created_at.seconds * 1000).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;
