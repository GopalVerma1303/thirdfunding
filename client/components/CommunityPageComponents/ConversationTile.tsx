import React from 'react'
import Image from 'next/image'
interface Props {
    name: string,
    avatarUrl: string
}

function ConversationTile({ name, avatarUrl }: Props) {
    return (
        <div className="bg-[#2D2D39] rounded-lg flex justify-start items-center p-2 gap-2 hover:cursor-pointer">
            <div>
                <img
                    className="rounded-full h-[30px] w-[30px]"
                    src={avatarUrl}
                    alt={`Avatar of ${name}`}
                />
            </div>
            <div className="flex flex-col">
                <p className="text-[13px] text-[#9799aa] font-bold">{name}</p>
                {/* <p className="text-[10px] text-[#808191] truncate w-1/4">0xa9a19dA76A71d788b74bF777a994051F6BF034A8</p> */}
            </div>
        </div>
    )
}

export default ConversationTile