import React, { useEffect, useState } from 'react'
import AddRoomAvatar from './AddRoomAvatar'
import JoinRoomAvatar from './JoinRoomAvatar'
import RoomAvatar from './RoomAvatar'
import { useAddress } from '@thirdweb-dev/react'
import { generateUsername } from 'unique-username-generator'
import { db } from '../../firebase/index'
import { addDoc,getDoc,deleteDoc,updateDoc, collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { type } from 'os'

function RoomList(props:any) {
    const address=useAddress();
    const router=useRouter();
    const [rooms,setRooms]=useState([]);
    console.log("Address", address); 
    // useEffect(()=>{
    //     if(router.isReady){
    //     getDocs(collection(db,`servers`)).then((snap)=>{
    //         const room2=[];
    //         snap.forEach((doc)=>{
    //             console.log(doc.data());
    //             room2.push(<RoomAvatar/>)
    //         })
    //         if(room2.length>0){

    //             setRooms(room2);
    //         }
    //     })
    //     }
    // },[router.isReady])
    useEffect(()=>{
        if(router.isReady){
            const q=query(collection(db,"servers"));
            const unsub=onSnapshot(q,(snapshot)=>{
                const arr=[];
                snapshot.docChanges().forEach((change)=>{
                    console.log(change);
                    if(change.type==='added'){
                        console.log(change.doc.id);
                        arr.push(<RoomAvatar/>);
                        console.log("New Room", change.doc.data());
                    }
                });
                setRooms((rooms)=>rooms.concat(arr));
                
                
            })
        }
    },[router.isReady])
    
    console.log(rooms);
    
    
    return (
        <div className=' w-[60px] h-full bg-[#3e3e4e] sm:rounded-l-[10px] flex flex-col flex-wrap px-2 '>
            <div className=' flex flex-col overflow-y-scroll text-white scrollbar-none  '>
                {rooms}
              
                <AddRoomAvatar username={props.userName}/>
                <JoinRoomAvatar />
            </div>
        </div>
    )
}

export default RoomList