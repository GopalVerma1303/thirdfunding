import React, { HTMLInputTypeAttribute } from 'react'

interface Props {
    lableName: string
    placeholder: string
    inputType: HTMLInputTypeAttribute
    isTextArea: boolean
    value: any
    handleChange: (e: any) => void;
}

function FormField({ lableName, placeholder, inputType, isTextArea, value, handleChange }: Props) {
    return (
        <label className='flex w-full flex-col'>
            {
                lableName && (
                    <span className='font-epilohue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{lableName}</span>
                )
            }
            {
                isTextArea ? (
                    <textarea
                        required
                        value={value}
                        onChange={handleChange}
                        rows={10}
                        placeholder={placeholder}
                        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                    />
                ) : (
                    <input
                        required
                        value={value}
                        onChange={handleChange}
                        type={inputType}
                        step="0.1"
                        placeholder={placeholder}
                        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                    >
                    </input>
                )
            }
        </label>
    )
}

export default FormField