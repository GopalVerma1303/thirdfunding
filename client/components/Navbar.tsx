import React, { useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";

function Navbar() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    return (
        <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
            <div className='lg:flex-1 flex flex-row w-full py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-xl'>
                <input type="text" placeholder="Search" className="px-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
                <div className='w-[72px] mx-2 h-full rounded-[20px] bg-[#4acd8d] flex item-center cursor-pointer justify-center items-center'>
                    <MdOutlineSearch className={`h-6 w-6 text-white`} />
                </div>
            </div>
        </div>
    )
}

export default Navbar