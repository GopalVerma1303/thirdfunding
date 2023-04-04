import React, { useEffect, useState } from 'react'
import AddRoomAvatar from './AddRoomAvatar'
import JoinRoomAvatar from './JoinRoomAvatar'
import RoomAvatar from './RoomAvatar'
import { useAddress } from '@thirdweb-dev/react'
import { generateUsername } from 'unique-username-generator'
import { db } from '../../firebase/index'
import { addDoc, getDoc, deleteDoc, updateDoc, collection, query, onSnapshot, getDocs, limitToLast, orderBy, limit, clearIndexedDbPersistence } from 'firebase/firestore'
import { useRouter } from 'next/router'
import Link from 'next/link'

function RoomList(props) {
    const address = useAddress();
    const router = useRouter();
    const [rooms, setRooms] = useState([]);

    console.log("Address", address);
    useEffect(() => {
        if (router.isReady) {
            getDocs(query(collection(db, `servers`), orderBy("timeStamp", "desc"))).then((snap) => {
                const room2 = [];
                snap.forEach((doc) => {

                    room2.push(<Link href={`/Community?server=${doc.id}`}><RoomAvatar serverId={doc.id} /></Link>)
                })
                if (room2.length > 0) {

                    setRooms(room2);
                }
            })
        }
    }, [router.isReady])
    useEffect(() => {
        if (router.isReady) {

            const q = query(collection(db, "servers"));
            const unsub = onSnapshot(q, (snapshot) => {

                if (snapshot.docChanges().length > 0) {
                    getDocs(query(collection(db, `servers`), orderBy("timeStamp", "desc"))).then((snap) => {
                        const room2 = [];
                        snap.forEach((doc) => {

                            room2.push(<Link href={`/Community?server=${doc.id}`}><RoomAvatar serverName={doc.data().serverName} serverId={doc.id} /></Link>)
                        })
                        if (room2.length > 0) {

                            setRooms(room2);
                        }
                    })
                }



            })
        }

    }, [router.isReady])

    console.log(rooms);


    return (
        <div className=' w-[60px] h-full bg-[#3e3e4e] sm:rounded-l-[10px] flex flex-col flex-wrap px-2 '>
            <div className=' flex flex-col overflow-y-scroll text-white scrollbar-none  '>
                {rooms}
                <AddRoomAvatar username={props.userName} />
                <JoinRoomAvatar username={props.userName} />
            </div>
        </div>
    )
}

export default RoomList