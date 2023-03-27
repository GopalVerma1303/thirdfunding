import React, { useEffect, useState } from 'react'
import ConversationTile from './ConversationTile'
import { HiArrowRight } from "react-icons/hi2";
import { useStateContext } from '../../miscellaneous_contexts';
import { collection, getDocs,doc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { useRouter } from 'next/router';

function ConversationList(props: any) {
    const [members,setMembers]=useState([]);
    const { chatToggleDrawer, setChatToggleDrawer } = useStateContext();
    const CommunityMenuToggleDrawer = (value: boolean) => {
        setChatToggleDrawer(value);
    }
    useEffect(()=>{
        if(props.serverId){
        getDocs(query(collection(db,`members`),where("serverId","==",props.serverId))).then((snap)=>{
            const arr:JSX.Element[]=[];
            snap.forEach((doc)=>{
               arr.push( <ConversationTile name={doc.data().username} avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />)
            })
            setMembers(arr);
        })
    }
    },[props.serverId])
    useEffect(()=>{
        if(props.serverId){
            const q=query(collection(db,"members"));
            const unsub=onSnapshot(q,(snapshot)=>{
      
                
              
                 
                if(snapshot.docChanges().length>0){
                    getDocs(query(collection(db,`members`),where("serverId","==",props.serverId))).then((snap)=>{
                        const room2=[];
                        snap.forEach((doc)=>{
                       
                            room2.push(<ConversationTile name={doc.data().username} avatarUrl='https://cdn-icons-png.flaticon.com/512/149/149071.png' />)
                        })
                        if(room2.length>0){
            
                            setMembers(room2);
                        }
                    })
                }
            
                
                
            })
    }
    },[props.serverId])
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