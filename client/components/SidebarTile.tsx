import React, { SVGProps, useState } from 'react'
interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
    page: String
}
function SidebarTile({ Icon, title, page }: Props) {
    return (
        <div className={`flex item-center transition-all duration-200 hover:bg-[#2e2f35] hover:cursor-pointer p-2 rounded-xl space-x-3  ${page == title && `bg-[#2e2f35]`}`}>
            <Icon className={`h-6 w-6 text-[#4fcb93] ${page == title && `text-[#4fcb93]`} `} />
            {/* <p className={`text-[#999999] font-semibold hidden lg:inline-flex ${page == title && `text-[#e7e7e7] font-bold`}`}>{title}</p> */}
        </div>
    )
}

export default SidebarTile