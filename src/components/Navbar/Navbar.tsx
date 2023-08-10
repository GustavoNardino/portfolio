"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'

type Props = {}

const Navbar = (props: Props) => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className='
            justify-end
            md:justify-center
            px-2
            md:px-8
            relative 
            flex 
            items-center 
            h-16 
            shadow-md 
            shadow-indigo-500/50'>
            {/* <ThemeButton mobile /> */}
            <section className='
                md:hidden
                cursor-pointer 
                w-11 
                h-11 
                mr-2 
                flex 
                items-center 
                justify-center 
                border 
                border-indigo-400 
                hover:border-indigo-100 
                text-indigo-400 
                hover:text-indigo-100'
                onClick={() => mobileMenu ? setMobileMenu(false) : setMobileMenu(true)}>
                <strong>=</strong>
            </section>
            {mobileMenu &&
                <section className='
                    absolute
                    z-50
                    bg-gradient-to-br from-slate-950 to-indigo-950
                    border border-indigo-900
                    flex
                    flex-col
                    items-center
                    justify-evenly
                    top-full
                    right-0
                    w-full
                '>
                    <Link onClick={() => setMobileMenu(false)} className='
                        text-indigo-400 
                        hover:text-indigo-100 
                        hover:underline p-6'
                        href={'/'}>Apresentação</Link>
                    <Link onClick={() => setMobileMenu(false)} className='
                        text-indigo-400 
                        hover:text-indigo-100 
                        hover:underline p-6'
                        href={'/experiences'}>Experiências</Link>
                    <Link onClick={() => setMobileMenu(false)} className='
                        text-indigo-400 
                        hover:text-indigo-100 
                        hover:underline p-6'
                        href={'/labs'}>Laboratório</Link>
                </section>
            }

            <section className='hidden md:flex'>
                <Link className='
                    text-indigo-400 
                    hover:text-indigo-100 
                    hover:underline p-6'
                    href={'/'}>Apresentação</Link>
                <Link className='
                    text-indigo-400 
                    hover:text-indigo-100 
                    hover:underline p-6'
                    href={'/experiences'}>Experiências</Link>
                <Link className='
                    text-indigo-400 
                    hover:text-indigo-100 
                    hover:underline p-6'
                    href={'/labs'}>Laboratório</Link>
            </section>
            {/* <ThemeButton /> */}
        </header>
    )
}

export default Navbar