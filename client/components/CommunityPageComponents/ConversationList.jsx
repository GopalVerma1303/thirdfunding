import React, { useEffect, useState } from 'react'
import ConversationTile from './ConversationTile'
import { HiArrowRight } from "react-icons/hi2";
import { useStateContext } from '../../miscellaneous_contexts';
import { collection, getDocs,doc, onSnapshot, query, where, orderBy, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import  { useRouter } from 'next/router';

function ConversationList(props) {
    const [members,setMembers]=useState([]);
    const { chatToggleDrawer, setChatToggleDrawer } = useStateContext();
    const router=useRouter();
    const CommunityMenuToggleDrawer = (value) => {
        setChatToggleDrawer(value);
    }
    useEffect(()=>{
        if(props.serverId && router.isReady){
        getDocs(query(collection(db,`members`),where("serverId","==",props.serverId))).then((snap)=>{
            const arr=[];
            snap.forEach((doc)=>{
               arr.push( <ConversationTile name={doc.data().username} avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />)
            })
            setMembers(arr);
        })
    }
    },[props.serverId,router.isReady])
   
    useEffect(()=>{
        if(props.serverId && router.isReady){
            const q=query(collection(db,"members"),where("serverId","==",props.serverId));
            const unsub=onSnapshot(q,(snapshot)=>{
                
               if(snapshot.docChanges().length>0){
                   getDocs(query(collection(db,`members`),where("serverId","==",props.serverId))).then((snap)=>{
                       const arr=[];
                       snap.forEach((doc)=>{
                          arr.push( <ConversationTile name={doc.data().username} avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />)
                       })
                       setMembers(arr);
                   })
               }
      
                
              
            
                
                
            })
    }
    },[props.serverId,router.isReady])
   //Add Realtime member add
    return (
        <div className=' w-[250px] h-full bg-[#1c1c24] flex flex-col'>
            <div className='w-full top-0 relative p-3 bg-[#272732] uppercase justify-between md:justify-center items-center flex font-bold text-[#808191]'>
                Roommates
                <HiArrowRight className=' md:hidden' onClick={() => CommunityMenuToggleDrawer(!chatToggleDrawer)} />
            </div>
            <div className=' flex flex-col overflow-y-scroll text-white p-1 scrollbar-none space-y-1 '>
                {/* <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                <ConversationTile name='Gopal Verma' avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' /> */}
                {members}
                
            </div>
        </div>
    )
}

export default ConversationList