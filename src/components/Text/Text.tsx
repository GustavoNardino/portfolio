import React from 'react'

type TextProps = {
    children: any,
    className?: string,
    title?:string
}

const Text = ({ children, className, title }: TextProps) => {
    return (
        <p title={title} className={`text-customText ${className}`}>
            {children}
        </p>
    )
}

export default Text