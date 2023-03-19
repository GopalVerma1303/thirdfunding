import React, { useEffect, useState } from 'react'
import { MdMenu } from "react-icons/md";
import CustomButton from './CustomButton';
import { ConnectWallet } from "@thirdweb-dev/react";
import { MdWbSunny } from "react-icons/md";
import Link from 'next/link';
import SidebarTile from './SidebarTile';
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
import { useRouter } from 'next/router';
import Searchbar from './Searchbar';
import MiniSearchbar from './MiniSearchbar';
import { MdNewspaper } from "react-icons/md";

function Navbar() {
    const address = "";
    const [activePage, setActivePage] = useState("/");
    const connect = () => {
        alert("Gopal Verma")
    }
    const router = useRouter();

    useEffect(() => {
        setActivePage(router.pathname.slice(1))
    }, [router.pathname])

    const [toggleDrawer, setToggleDrawer] = useState(false)
    return (
        <>
            <div className='flex space-x-3'>
                <Searchbar />
                <div className=' sm:flex-row flex-col-reverse justify-end align-middle item-centert mb-[35px] flex'>
                    <div className='flex-row justify-center items-center hidden sm:flex'>
                        <ConnectWallet accentColor={"#8c6dfd"} />
                    </div>
                    <div className={`w-[52px] h-[52px] sm:hidden`}>

                    </div>
                </div>
            </div>

            <div className='sm:hidden fixed z-50 top-0 left-0 w-screen mb-[35px] py-5 pl-4 pr-2 h-[70px] bg-[#1c1c24] justify-start items-center flex'>
                <div className='w-screen items-center flex justify-between'>
                    <div className='-mr-3 rounded-xl bg-[#2e2f35] flex item-center cursor-pointer justify-center items-center w-[52px] h-[52px]'>
                        <Link href="/">
                            <img src='/thirdfundinglogo.png' className='w-[52px] h-[52px] rounded-xl' />
                        </Link>
                    </div>
                    <div className='flex space-x-1'>
                        <div className='-ml-3 rounded-xl bg-[#2e2f35] flex item-center cursor-pointer justify-center items-center w-[52px] h-[52px]'>
                            <MdWbSunny className={`h-4 w-4 text-[#4acd8d]`} />
                        </div>
                        <div className='-ml-3 rounded-xl bg-[#2e2f35] flex item-center cursor-pointer justify-center items-center w-[52px] h-[52px]'>
                            <MdMenu onClick={() => setToggleDrawer(!toggleDrawer)} className={`h-6 w-6 text-[#4acd8d]`} />
                            <div className={`absolute top-[70px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 transition-all duration-700 ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"}`}>
                                <ul className="mb-4 px-2">
                                    <li className='px-4'>
                                        <MiniSearchbar />
                                    </li>
                                    <li className='p-4'>
                                        <ConnectWallet accentColor={"#8c6dfd"} />
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Explore"}>
                                            <SidebarTile Icon={MdExplore} title={"Explore"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Start"}>
                                            <SidebarTile Icon={MdFlag} title={"Start"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Community"}>
                                            <SidebarTile Icon={MdGroups} title={"Community"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/News"}>
                                            <SidebarTile Icon={MdNewspaper} title={"News"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Profile"}>
                                            <SidebarTile Icon={MdPerson} title={"Profile"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/About"}>
                                            <SidebarTile Icon={MdInfo} title={"About"} page={activePage} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar