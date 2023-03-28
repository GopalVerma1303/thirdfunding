import React from 'react'
import { useRouter } from 'next/router'
function RoomAvatar(props:any) {
    const router=useRouter();
    return (
        <div className=' hover:cursor-pointer justify-center flex'>
            <img src='/infuralogo.png' className='w-[40px] h-[40px] rounded-full flex-shrink-0 m-[6px]' />
        </div>
    )
}

export default RoomAvatar