import React from 'react'
import ConversationList from './ConversationList'
import RoomList from './RoomList'

function ConversationInbox() {
    return (
        <div className=' md:hidden absolute top-0 left-0 w-fit h-[89vh]  overflow-y-scroll scrollbar-none flex flex-row'>
            <RoomList />
            <ConversationList />
        </div>
    )
}

export default ConversationInbox