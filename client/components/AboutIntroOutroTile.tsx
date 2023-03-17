import React from 'react'
interface Props {
    message: string;
}
function AboutIntroOutroTile({ message }: Props) {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default AboutIntroOutroTile