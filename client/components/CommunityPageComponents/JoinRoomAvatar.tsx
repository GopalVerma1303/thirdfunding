import { useAddress } from '@thirdweb-dev/react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { FaLink } from "react-icons/fa";
import { db } from '../../firebase';
import { useStateContext } from '../../miscellaneous_contexts';


function JoinRoomAvatar(props: any ) {
    const { isAddRoomModalOpen, setIsAddRoomModalOpen } = useStateContext()
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("")
    const address=useAddress();
    const handleClick =async()=>{
        if(address){
        getDocs(query(collection(db, `members`), where("serverId", "==", name), where("username", "==", props.username))).then((snap) => {
            if (snap.docs.length > 0) {
                alert("Already Joined group");
            }
            else {
            
                addDoc(collection(db,"members"),{
                    "username":props.username,
                    "walletAddress":address,
                    "serverId":name,
                    "timeStamp":new Date()
                }).then(()=>{alert("Joined The Group"),setShowModal(false)})
            }
        })
    }
    else{
        alert("Connect the Wallet");
    }
       
    }
    return (
        <>
            <div onClick={() => setShowModal(true)} className=' bg-[#58586b] hover:cursor-pointer justify-center items-center flex w-[40px] h-[40px] rounded-full flex-shrink-0 my-[6px] mb-20'>
                <FaLink className=' text-[#bdbac6]' />
            </div>
            {
                showModal && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>

                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            &#8203;
                            <div className="inline-block align-bottom bg-[#2d2d39] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3 className="text-lg leading-6 font-medium text-white">Join room</h3>
                                        <div className="mt-2">

                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-500 font-bold mb-2">
                                                    What's the room ID?
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    placeholder="Enter room ID"
                                                    onChange={(event) => setName(event.target.value)}
                                                    className=" placeholder-[#666d7b] shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#3e3e4e] border-none leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                    className="mr-2 py-2 px-4 border  rounded-md   border-[#8C6DFD] text-[#8C6DFD] focus:outline-none focus:shadow-outline-blue focus:border-[#7359d2] active:bg-[#7359d2]"
                                                >
                                                    Discard
                                                </button>
                                                <button
                                                    onClick={handleClick}
                                                    type="button"
                                                    className="py-2 px-4 border border-transparent rounded-md text-white bg-[#8C6DFD] hover:bg-[#7359d2] focus:outline-none focus:shadow-outline-blue focus:border-[#7359d2] active:bg-[#7359d2]"
                                                >
                                                    Join
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default JoinRoomAvatar