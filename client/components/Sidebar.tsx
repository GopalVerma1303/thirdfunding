import React, { useEffect, useState } from 'react'
import SidebarTile from './SidebarTile'
import { MdHomeFilled } from "react-icons/md";
import { MdFlag } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdOutlineHandyman } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useRouter } from 'next/router';
import Link from 'next/link';

function Sidebar() {
    const [activePage, setActivePage] = useState("Home");
    const router = useRouter()

    useEffect(() => {
        setActivePage(router.pathname.slice(1))
        if (router.pathname.slice() == '/') {
            router.push('/Home')
            setActivePage('Home')
        }
    }, [router.pathname])

    return (
        <div className='scrollbar bg-[#1d1a25] flex justify-between items-center flex-col sticky top-5 h-[93vh] rounded-xl'>
            <div className=''>
                <div className=' justify-center items-center flex p-2'>
                    <Link href="/">
                        <img src='/thirdfundinglogo.png' className='w-[52px] h-[52px] rounded-xl' />
                    </Link>
                </div>
                <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24 rounded-[20px] w-[76px] py-4 '>
                    <div className='flex flex-col space-y-4 justify-between'>
                        <Link href={"/Home"}>
                            <SidebarTile Icon={MdHomeFilled} title={"Home"} page={activePage} />
                        </Link>
                        <Link href={"/Projects"}>
                            <SidebarTile Icon={MdFlag} title={"Projects"} page={activePage} />
                        </Link>
                        <Link href={"/Explore"}>
                            <SidebarTile Icon={MdExplore} title={"Explore"} page={activePage} />
                        </Link>
                        <Link href={"/Community"}>
                            <SidebarTile Icon={MdGroups} title={"Community"} page={activePage} />
                        </Link>
                        <Link href={"/Blog"}>
                            <SidebarTile Icon={MdLibraryBooks} title={"Blog"} page={activePage} />
                        </Link>
                        <Link href={"/Profile"}>
                            <SidebarTile Icon={MdPerson} title={"Profile"} page={activePage} />
                        </Link>
                        <Link href={"/Wallet"}>
                            <SidebarTile Icon={MdAccountBalanceWallet} title={"Wallet"} page={activePage} />
                        </Link>
                        <Link href={"/Support"}>
                            <SidebarTile Icon={MdOutlineHandyman} title={"Support"} page={activePage} />
                        </Link>
                        <Link href={"/About"}>
                            <SidebarTile Icon={MdInfo} title={"About"} page={activePage} />
                        </Link>
                        <Link href={"/Legal"}>
                            <SidebarTile Icon={MdAccountBalance} title={"Legal"} page={activePage} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar