import React from 'react'
import { useRouter } from 'next/router'
import Avatar from 'react-avatar';

function RoomAvatar(props: any) {
    const router = useRouter();
    return (
        <div className=' hover:cursor-pointer justify-center flex items-center my-[5px] '>
            {/* <img src='https://icon-library.com/images/icon-for-community/icon-for-community-11.jpg' className='bg-white rounded-full w-[40px] h-[40px] flex-shrink-0 m-[6px]' /> */}
            <Avatar name={props.serverName} size="40" round maxInitials={2} className="mx-auto flex-shrink-0" />
        </div>
    )
}

export default RoomAvatar