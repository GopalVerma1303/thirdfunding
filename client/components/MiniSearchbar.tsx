import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

function MiniSearchbar() {
    return (
        <div className='flex  py-2 pl-4 pr-2 h-[52px] bg-[#2e2f35] rounded-lg'>
            <input type="text" placeholder="Search" className="px-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#9499a7] text-white bg-transparent outline-none" />
            <div className='w-[72px] h-full rounded-lg bg-[#4acd8d] flex item-center cursor-pointer justify-center items-center'>
                <MdOutlineSearch className={`h-6 w-6 text-white`} />
            </div>
        </div>
    )
}

export default MiniSearchbar