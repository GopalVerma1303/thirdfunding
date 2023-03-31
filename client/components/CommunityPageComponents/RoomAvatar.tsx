import React from 'react'
import { useRouter } from 'next/router'
function RoomAvatar(props:any) {
    const router=useRouter();
    return (
        <div className=' hover:cursor-pointer justify-center flex '>
            <img src='https://icon-library.com/images/icon-for-community/icon-for-community-11.jpg' className='bg-white rounded-full w-[40px] h-[40px] flex-shrink-0 m-[6px]' />
        </div>
    )
}

export default RoomAvatar