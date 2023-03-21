import React, { useState } from 'react'
import ChatView from '../components/CommunityPageComponents/ChatView'
import ConversationList from '../components/CommunityPageComponents/ConversationList'
import RoomList from '../components/CommunityPageComponents/RoomList'
import { useStateContext } from '../miscellaneous_contexts'
import ConversationInbox from '../components/CommunityPageComponents/ConversationInbox'

function Community() {
  const { chatToggleDrawer } = useStateContext();
  return (
    <div className='flex justify-start flex-row rounded-[10px] sm:h-[82vh] h-[90vh] top-[70px] sm:top-0 absolute  left-0 right-0  sm:relative'>
      <div className='flex-row hidden md:inline-flex'>
        <RoomList />
        <ConversationList />
      </div>
      <ChatView />
      {
        chatToggleDrawer && <ConversationInbox />
      }
    </div>
  )
}

export default Community