import React from 'react'

interface SubtitlesProps {
    children: any,
    className?: string
}

const Subtitle = ({ children, className }: SubtitlesProps) => {
    return (
        <h2 className={`text-customSubtitle text-xl mb-4 underline ${className}`}>
            {children}
        </h2>
    )
}

export default Subtitle