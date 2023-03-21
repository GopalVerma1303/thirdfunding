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
        <input
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            step="0.1"
            placeholder={placeholder}
            className="flex w-full py-[15px] sm:px-[px]  outline-none border-[1px] border-[#3E3E4E] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#676f7e] rounded-[10px] "
        >
        </input>
    )
}

export default MessageFormField