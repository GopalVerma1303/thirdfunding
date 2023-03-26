import React, { useEffect } from 'react'
import AddRoomAvatar from './AddRoomAvatar'
import RoomAvatar from './RoomAvatar'
import { useAddress } from '@thirdweb-dev/react'
import { generateUsername } from 'unique-username-generator'
import { db } from '../../firebase/index'
import { addDoc,getDoc,deleteDoc,updateDoc, collection, query, onSnapshot, getDocs } from 'firebase/firestore'

function RoomList(props:any) {
    const address=useAddress();
    console.log("Address", address); 
    getDocs(collection(db,`users/${address}/servers`)).then((snap)=>{
        snap.forEach((doc)=>{
            console.log(doc.id, doc.data());
        })
    })
    return (
        <div className=' w-[60px] h-full bg-[#3e3e4e] sm:rounded-l-[10px] flex flex-col flex-wrap px-2 '>
            <div className=' flex flex-col overflow-y-scroll text-white scrollbar-none  '>
                <RoomAvatar />
              
                <AddRoomAvatar username={props.userName}/>
            </div>
        </div>
    )
}

export default RoomList