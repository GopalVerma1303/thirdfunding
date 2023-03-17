import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

function Searchbar() {
    return (
        <div className='lg:flex-1 flex-row w-full  pr-1 pl-4 py-1 h-[52px] bg-[#1c1c24] rounded-lg hidden sm:flex'>
            <input type="text" placeholder="Search" className="px-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#9499a7] text-white bg-transparent outline-none" />
            <div className='w-[72px] h-full rounded-lg bg-[#4acd8d] flex item-center cursor-pointer justify-center items-center'>
                <MdOutlineSearch className={`h-6 w-6 text-white`} />
            </div>
        </div>
    )
}

export default Searchbar