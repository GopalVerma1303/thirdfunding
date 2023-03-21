import React from 'react'
import ChatView from '../components/CommunityPageComponents/ChatView'
import ConversationList from '../components/CommunityPageComponents/ConversationList'
import RoomList from '../components/CommunityPageComponents/RoomList'

function Community() {
  return (
    <div className='bg-[#000000] flex justify-start flex-row rounded-[10px] h-[82vh] '>
      <div className='flex-row hidden md:inline-flex'>
        <RoomList />
        <ConversationList />
      </div>
      <ChatView />
    </div>
  )
}

export default Community