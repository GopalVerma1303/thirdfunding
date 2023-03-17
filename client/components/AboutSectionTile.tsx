import React from 'react'
interface Props {
    heading: string;
    description: string;
}
function AboutSectionTile({ heading, description }: Props) {
    return (
        <div>
            <p className=' text-xl'>{heading}</p>
            <p>{description}</p>
        </div>
    )
}

export default AboutSectionTile