'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    children: any
    className?: string
    id:number
}
const Infobox = ({ children, className, id }: Props) => {
    const router = useRouter()
    
    function handleOpenLab() {
        router.push(`/labs/${id}`)
    }
    return (
        <div onClick={handleOpenLab}
            className={`
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