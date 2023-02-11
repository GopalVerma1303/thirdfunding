import React from 'react'

interface Props {
    btnType: string;
    title: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    styles: string;
}

function CustomButton({ btnType, title, handleClick, styles }: Props) {
    return (
        <button
            typeof={btnType}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton