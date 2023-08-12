import React from 'react'

type Props = {
    children: any
    className?:string
}
//lg:w-1/3
//xl:w-1/4 
const Infobox = ({ children, className }: Props) => {
    return (
        <div className={`
            ${className}
            lg:w-1/2
            m-4 
            p-2 
            rounded-md 
            bg-customInfoboxBackground
            shadow-md
            shadow-customText
            `}>
            {children}
        </div>
    )
}

export default Infobox