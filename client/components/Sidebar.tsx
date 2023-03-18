import React, { useEffect, useState } from 'react'
import SidebarTile from './SidebarTile'
import { MdExplore, MdHomeFilled } from "react-icons/md";
import { MdFlag } from "react-icons/md";
// import { MdExplore } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdNewspaper } from "react-icons/md";
import { MdPerson } from "react-icons/md";
// import { MdAccountBalanceWallet } from "react-icons/md";
// import { MdOutlineHandyman } from "react-icons/md";
import { MdInfo } from "react-icons/md";
// import { MdAccountBalance } from "react-icons/md";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdWbSunny } from "react-icons/md";


function Sidebar() {
    const [activePage, setActivePage] = useState("Home");
    const router = useRouter()

    useEffect(() => {
        setActivePage(router.pathname.slice(1))
        // if (router.pathname.slice() == '/') {
        //     router.push('/Home')
        //     setActivePage('Home')
        // }
    }, [router.pathname])

    return (
        <div className=''>
            <div className='scrollbar bg-[#1d1a25] flex justify-between items-center flex-col sticky top-5 h-[93vh] rounded-xl'>
                <div className=' justify-center items-center flex p-2'>
                    <Link href="/">
                        <img src='/thirdfundinglogo.png' className='w-[52px] h-[52px] rounded-xl' />
                    </Link>
                </div>
                <div className=' flex-1 flex flex-col justify-between items-center bg-[#1c1c24 rounded-[20px] w-[76px] py-4 '>
                    <div className='flex flex-col space-y-3 justify-between'>
                        <Link href={"/Explore"}>
                            <SidebarTile Icon={MdExplore} title={"Explore"} page={activePage} />
                        </Link>
                        <Link href={"/Start"}>
                            <SidebarTile Icon={MdFlag} title={"Start"} page={activePage} />
                        </Link>
                        <Link href={"/Community"}>
                            <SidebarTile Icon={MdGroups} title={"Community"} page={activePage} />
                        </Link>
                        <Link href={"/News"}>
                            <SidebarTile Icon={MdNewspaper} title={"News"} page={activePage} />
                        </Link>
                        <Link href={"/Profile"}>
                            <SidebarTile Icon={MdPerson} title={"Profile"} page={activePage} />
                        </Link>
                        <Link href={"/About"}>
                            <SidebarTile Icon={MdInfo} title={"About"} page={activePage} />
                        </Link>
                    </div>
                    <div className={`w-[52px] h-[52px] mx-1 flex item-center transition-all duration-200 hover:bg-[#2e2f35] hover:cursor-pointer rounded-full justify-center items-center`}>
                        <MdWbSunny className={`h-6 w-6 text-[#4acd8d]`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar