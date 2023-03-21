import React from 'react'
import ConversationList from './ConversationList'
import RoomList from './RoomList'

function ConversationInbox() {
    return (
        <div className=' absolute top-0 left-0 w-fit h-[90vh]  overflow-y-scroll scrollbar-none flex flex-row'>
            <RoomList />
            <ConversationList />
        </div>
    )
}

export default ConversationInbox