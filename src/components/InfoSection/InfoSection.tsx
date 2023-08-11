import React, { ReactNode } from 'react'

type Props = {
    children?: any
    reverse?:boolean
}

const InfoSection = ({ children, reverse }: Props) => {
    return (
        <section className={`flex ${reverse?'flex-col-reverse':'flex-col'} md:flex-row`}>
            {children}
        </section>
    )
}

export default InfoSection