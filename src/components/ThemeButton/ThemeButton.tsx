import React from 'react'

type Props = {
    mobile?: boolean
}
//className='hidden md:flex text-slate-50'
//className='md:hidden text-slate-50'
const ThemeButton = ({ mobile }: Props) => {
    return (
        <label className={`${mobile?'md:hidden ':'hidden md:flex'} `}>
            <input className='' type="checkbox" checked />
            <span className="slider round"></span>
        </label>
    )
}

export default ThemeButton