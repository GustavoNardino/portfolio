import React from 'react'

type TextProps = {
    children: string
}

const Text = ({ children }: TextProps) => {
    return (
        <p className='text-indigo-100'>
            {children}
        </p>
    )
}

export default Text