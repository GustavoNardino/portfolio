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
            bg-gradient-to-br 
            from-slate-950 
            to-indigo-950 
            border 
            border-b-indigo-900
            border-r-indigo-900
            border-t-0
            border-l-0
            hover:-rotate-2
            `}>
            {children}
        </div>
    )
}

export default Infobox