import React, { useEffect } from 'react'
import ConversationTile from './ConversationTile'
import { HiArrowRight } from "react-icons/hi2";
import { useStateContext } from '../../miscellaneous_contexts';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useRouter } from 'next/router';

function ConversationList(props: any) {
    const { chatToggleDrawer, setChatToggleDrawer } = useStateContext();
    const CommunityMenuToggleDrawer = (value: boolean) => {
        setChatToggleDrawer(value);
    }
    
    getDocs(collection(db,`servers/${props.serverId}/members`)).then((snap)=>{
        snap.forEach((doc)=>{
            console.log("Member", doc.data());
        })
    })
    return (
        <div className=' w-[250px] h-full bg-[#1c1c24] flex flex-col'>
            <div className='w-full top-0 relative p-3 bg-[#272732] uppercase justify-between md:justify-center items-center flex font-bold text-[#808191]'>
                Roommates
                <HiArrowRight className=' md:hidden' onClick={() => CommunityMenuToggleDrawer(!chatToggleDrawer)} />
            </div>
            <div className=' flex flex-col overflow-y-scroll text-white p-1 scrollbar-none space-y-1 '>
                <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                
            </div>
        </div>
    )
}

export default ConversationList