import React from 'react'
import Image from 'next/image'
import { useStateContext } from '../../miscellaneous_contexts'
import Avatar from 'react-avatar';
interface Props {
    name: string,
    avatarUrl: string
}

function ConversationTile({ name, avatarUrl }: Props) {
    const {chatToggleDrawer, setChatToggleDrawer} = useStateContext();
    const CommunityMenuToggleDrawer = (value: boolean) => {
        setChatToggleDrawer(value);
    }
    return (
        <div onClick={() => CommunityMenuToggleDrawer(!chatToggleDrawer)} className="bg-[#2D2D39] flex justify-start items-center p-2 gap-2 hover:cursor-pointer">
            <div>
                <Avatar name={name} size="30" round maxInitials={2} className="mx-auto" />
            </div>
            <div className="flex flex-col">
                <p className="text-[13px] text-[#9799aa] font-bold">{name}</p>
                {/* <p className="text-[10px] text-[#808191] truncate w-1/4">0xa9a19dA76A71d788b74bF777a994051F6BF034A8</p> */}
            </div>
        </div>
    )
}

export default ConversationTile