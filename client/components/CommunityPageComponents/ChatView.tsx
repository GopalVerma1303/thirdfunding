import React from 'react'
import MessageFormField from './MessageFormField'
import { HiArrowLeft } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import ChatMessage from './ChatMessage ';
import Message from '../../assets/chat';
import { useStateContext } from '../../miscellaneous_contexts'

function ChatView() {
    const { chatToggleDrawer, setChatToggleDrawer } = useStateContext();
    function handleFormFieldChange(arg0: string, e: any): void {
        throw new Error('Function not implemented.')
    }
    const CommunityMenuToggleDrawer = (value: boolean) => {
        setChatToggleDrawer(value);
    }
    return (
        <div className=' w-full h-full bg-[#2d2d39] md:rounded-r-[10px] overflow-y-scroll scrollbar-none flex flex-col justify-between'>
            <div className='w-full top-0 relative p-1 bg-[#3e3e4e] flex items-center'>
                <HiArrowLeft onClick={() => CommunityMenuToggleDrawer(!chatToggleDrawer)} className='mx-5  text-[20px] text-[#808191] md:hidden' />
                <div className="bg-[#3e3e4e] rounded-lg flex justify-start items-center p-2 gap-2 hover:cursor-pointer">
                    <div>
                        <img
                            className="rounded-full h-[30px] w-[30px]"
                            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                            alt={`Avatar of Gopal Verma`}
                        // alt={`Avatar of ${name}`}
                        />
                    </div>
                    <div>
                        <p className="text-[15px] text-[#b2b4c9] font-semibold">Gopal Verma</p>
                        {/* <p className="text-[13px] text-[#808191] font-bold">{name}</p> */}
                    </div>
                </div>
            </div>
            <div className=' flex flex-col overflow-y-scroll text-white p-3 h-full '>
                {
                    Message.map(e => (
                        <ChatMessage message={e.message} sender={e.username} imageUrl={e.profilePic} created_at={e.created_at} />
                    ))
                }
            </div>
            <div className='w-full top-0 relative bg-[#3e3e4e]'>
                <form className='flex items-center mx-5'>
                    <BsFillChatLeftDotsFill className='text-[20px] text-[#666d7b] mr-2' />
                    <MessageFormField
                        lableName="Your Name *"
                        placeholder="Write your message"
                        inputType="text"
                        value=""
                        handleChange={(e) => handleFormFieldChange("name", e)}
                        isTextArea={false} />
                    <FaTelegramPlane className='mx-1 text-[25px] text-[#808191] hover:cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default ChatView