import React from 'react'
import { MdNewspaper } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { format } from 'date-fns'

interface Props {
    author: any;
    title: any;
    description: any;
    url: any;
    source: any;
    image: any;
    category: any;
    language: any;
    country: any;
    published_at: any
}
function NewsTile({ author, title, description, url, source, image, category, language, country, published_at }: Props) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(published_at);
    const formatted_published_at = format(date, 'MMMM do, yyyy')
    return (
        <div className='w-full'>
            <div className='w-full'>
                <a href={url}>
                    <div className='w-full p-5 rounded-[15px] bg-[#1c1c24] cursor-pointer my-5 flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <p className='flex mt-[4px] font-epilogue font-normal text-[12px] text-[#808191] justify-center items-center gap-1'><MdNewspaper />{source}</p>
                            <p className='mt-[4px] font-epilogue font-normal text-[12px] text-[#808191] flex items-center gap-1'><MdCalendarMonth />{formatted_published_at}</p>
                        </div>
                        <div className='py-5'>
                            <p className='mt-[4px] font-epilogue font-bold text-[30px] text-[#b4b5cc]'>{title}</p>
                            <p className='mt-[4px] font-epilogue font-bold text-[12px] text-[#808191]'>{description}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='mt-[4px] font-epilogue font-normal text-[12px] flex items-center text-[#808191] gap-1'><MdOutlineCreate />{author}</p>
                            <p className='flex justify-center items-center mt-[4px] font-epilogue font-normal text-[12px] text-[#808191] gap-1'><MdLocationOn />{country}</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>


    )
}

export default NewsTile