import React, { HTMLInputTypeAttribute } from 'react'

interface Props {
    lableName: string
    placeholder: string
    inputType: HTMLInputTypeAttribute
    isTextArea: boolean
    value: any
    handleChange: (e: any) => void;
}

function MessageFormField({ lableName, placeholder, inputType, isTextArea, value, handleChange }: Props) {
    return (
        <label className='flex w-full flex-col'>
            <input
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={placeholder}
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3E3E4E] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#676f7e] font-bold rounded-[10px] sm:min-w-[300px]"
            >
            </input>
        </label>
    )
}

export default MessageFormField