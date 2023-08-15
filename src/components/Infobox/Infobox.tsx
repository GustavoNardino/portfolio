import React from 'react'

type Props = {
    children: any
    className?:string
}
const Infobox = ({ children, className }: Props) => {
    return (
        <div className={`
            ${className}
            h-48
            overflow-y-auto
            p-2 
            rounded-md 
            bg-customFooterBackground
            shadow-sm
            shadow-customText
            cursor-pointer
            hover:bg-customFooterBackground/70
            `}>
            {children}
        </div>
    )
}

export default Infobox