import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useStateContext } from '../../miscellaneous_contexts';
import AddRoomModal from '../Modals/AddRoomModal';

function AddRoomAvatar() {
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
            <div onClick={() => setIsAddRoomModalOpen(!isAddRoomModalOpen)} className=' bg-[#58586b] hover:cursor-pointer justify-center items-center flex w-[40px] h-[40px] rounded-full flex-shrink-0 my-[6px]'>
                <FaPlus className=' text-[#bdbac6]' />
            </div>
            <AddRoomModal showModal={isAddRoomModalOpen} closeModal={() => setIsAddRoomModalOpen(!isAddRoomModalOpen)} />
        </>

    )
}

export default AddRoomAvatar