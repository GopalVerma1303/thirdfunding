import React, { useEffect, useState } from 'react'
import ChatView from '../components/CommunityPageComponents/ChatView'
import ConversationList from '../components/CommunityPageComponents/ConversationList'
import RoomList from '../components/CommunityPageComponents/RoomList'
import { useStateContext } from '../miscellaneous_contexts'
import ConversationInbox from '../components/CommunityPageComponents/ConversationInbox'
import { useAddress } from '@thirdweb-dev/react'
import { generateUsername } from 'unique-username-generator'
import { db, app } from '../firebase/index'
import { addDoc, getDoc, deleteDoc, updateDoc, collection, where, query, onSnapshot, setDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { type } from 'os'
import ConnectWalletModal from '../components/ConnectWalletModal';

function Community() {
  const router = useRouter();
  const address = useAddress();
  const [user, setUser] = useState("");
  const { isAddRoomModalOpen, setIsAddRoomModalOpen } = useStateContext();
  console.log(address);
  //   const address=useAddress();
  //   console.log(address);
  //   // Another Option is to display it at main page itselt U Decide!
  useEffect(() => {
    if (address && router.isReady) {
      getDoc(doc(db, "users", address)).then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setUser(docSnap.data().username);
        } else {
          let randUser = generateUsername();
          setUser(randUser);
          setDoc(doc(db, `users`, address), {
            "username": randUser,
            "walletAddress": address,
            "timeStamp": new Date()
          }).then(() => {
            console.log("Done")

          }).catch((err) => {
            alert("Error");
          })

        }
      })
    }

  }, [address, router.isReady])

  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false)
  useEffect(() => {
    address != null ? setShowConnectWalletModal(false) : setShowConnectWalletModal(true)
  }, [address])

  const { chatToggleDrawer } = useStateContext();
  return (
    <>
    {
      showConnectWalletModal && <ConnectWalletModal />
    }
      <div className='flex justify-start flex-row rounded-[10px] sm:h-[82vh] h-[89vh] top-[70px] sm:top-0 absolute  left-0 right-0  sm:relative'>
        <div className='flex-row hidden md:inline-flex'>
          <RoomList userName={user} />
          <ConversationList serverId={router.query["server"]} username={user} />
        </div>
        <ChatView serverId={router.query["server"]} username={user} />
        {
          chatToggleDrawer && <ConversationInbox serverId={router.query["server"]} username={user} /> // Confusion
        }
      </div>
    </>

  )
}

export default Community
