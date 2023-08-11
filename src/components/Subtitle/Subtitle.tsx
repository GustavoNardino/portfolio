import React from 'react'

interface SubtitlesProps {
    children: string
}

const Subtitle = ({ children }: SubtitlesProps) => {
    return (
        <h2 className='text-customSubtitle text-xl mb-4 underline'>
            {children}
        </h2>
    )
}

export default Subtitle