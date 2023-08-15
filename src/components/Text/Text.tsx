import React from 'react'

type TextProps = {
    children: any,
    className?: string
}

const Text = ({ children, className }: TextProps) => {
    return (
        <p className={`text-customText ${className}`}>
            {children}
        </p>
    )
}

export default Text