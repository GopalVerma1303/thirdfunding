import React, { useEffect, useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
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

function Navbar() {
    const address = "";
    const [activePage, setActivePage] = useState("/");
    const connect = () => {
        alert("Gopal Verma")
    }
    const router = useRouter();

    useEffect(() => {
        setActivePage(router.pathname.slice(1))
        // if (router.pathname.slice() == '/') {
        //     router.push('/Home')
        //     setActivePage('Home')
        // }
    }, [router.pathname])

    const [toggleDrawer, setToggleDrawer] = useState(false)
    return (
        <>
            <div className=' sm:flex-row flex-col-reverse justify-between align-middle item-centert mb-[35px] gap-6 flex'>
                <div className='lg:flex-1 flex-row w-full py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-full hidden sm:flex'>
                    <input type="text" placeholder="Search" className="px-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
                    <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex item-center cursor-pointer justify-center items-center'>
                        <MdOutlineSearch className={`h-6 w-6 text-white`} />
                    </div>
                </div>
                <div className='flex-row justify-between items-center hidden sm:flex'>
                    <ConnectWallet accentColor={"#8c6dfd"} />
                </div>
            </div>
            <div className='sm:hidden absolute top-0 left-0 w-screen mb-[35px] py-5 pl-4 pr-2 h-[70px] bg-[#1c1c24] justify-start items-center flex'>
                <div className='w-screen items-center flex justify-between'>
                    <div onClick={() => setToggleDrawer(!toggleDrawer)} className='-mr-3 rounded-xl bg-[#2e2f35] flex item-center cursor-pointer justify-center items-center w-[52px] h-[52px]'>
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
                                    <li className='p-4'>
                                        <ConnectWallet accentColor={"#8c6dfd"} />
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Home"}>
                                            <SidebarTile Icon={MdHomeFilled} title={"Home"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Projects"}>
                                            <SidebarTile Icon={MdFlag} title={"Projects"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Explore"}>
                                            <SidebarTile Icon={MdExplore} title={"Explore"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Community"}>
                                            <SidebarTile Icon={MdGroups} title={"Community"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Blog"}>
                                            <SidebarTile Icon={MdLibraryBooks} title={"Blog"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Profile"}>
                                            <SidebarTile Icon={MdPerson} title={"Profile"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Wallet"}>
                                            <SidebarTile Icon={MdAccountBalanceWallet} title={"Wallet"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Support"}>
                                            <SidebarTile Icon={MdOutlineHandyman} title={"Support"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/About"}>
                                            <SidebarTile Icon={MdInfo} title={"About"} page={activePage} />
                                        </Link>
                                    </li>
                                    <li onClick={() => setToggleDrawer(!toggleDrawer)}>
                                        <Link href={"/Legal"}>
                                            <SidebarTile Icon={MdAccountBalance} title={"Legal"} page={activePage} />
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