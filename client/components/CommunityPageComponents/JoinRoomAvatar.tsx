import React, { useState } from 'react'
import { FaLink } from "react-icons/fa";
import { useStateContext } from '../../miscellaneous_contexts';
import AddRoomModal from '../Modals/AddRoomModal';
import JoinRoomModal from '../Modals/JoinRoomModal';

function JoinRoomAvatar() {
    const { isAddRoomModalOpen, setIsAddRoomModalOpen } = useStateContext()
    const [showModal, setShowModal] = useState(false)
    const handleSayHiClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <div onClick={() => setIsAddRoomModalOpen(!isAddRoomModalOpen)} className=' bg-[#58586b] hover:cursor-pointer justify-center items-center flex w-[40px] h-[40px] rounded-full flex-shrink-0 my-[6px] mb-5'>
                <FaLink className=' text-[#bdbac6]' />
            </div>
            <JoinRoomModal showModal={isAddRoomModalOpen} closeModal={() => setIsAddRoomModalOpen(!isAddRoomModalOpen)} />
        </>

    )
}

export default JoinRoomAvatar