"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import {GiHamburgerMenu} from 'react-icons/gi'

type Props = {}

const Navbar = (props: Props) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    
    
    return (
        <header className='
            justify-between
            
            px-2
            md:px-8
            relative 
            flex 
            flex-row-reverse
            md:flex-row
            items-center 
            h-16 
            shadow-md 
            shadow-indigo-500/50'>
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
                <GiHamburgerMenu />
            </section>
            {mobileMenu &&
                <section className='
                    absolute
                    z-50
                    bg-customNavbarBackground
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
                        text-customLink
                        hover:text-customLink 
                        hover:underline p-6'
                        href={'/'}>Apresentação</Link>
                    <Link onClick={() => setMobileMenu(false)} className='
                        text-customLink
                        hover:text-customLink 
                        hover:underline p-6'
                        href={'/experiences'}>Experiências</Link>
                    <Link onClick={() => setMobileMenu(false)} className='
                        text-customLink
                        hover:text-customLink 
                        hover:underline p-6'
                        href={'/labs'}>Laboratório</Link>
                </section>
            }

            <section className='hidden md:flex'>
                <Link className='
                    text-customLink 
                    hover:text-customLink
                    hover:underline p-6'
                    href={'/'}>Apresentação</Link>
                <Link className='
                    text-customLink 
                    hover:text-customLink
                    hover:underline p-6'
                    href={'/experiences'}>Experiências</Link>
                <Link className='
                    text-customLink 
                    hover:text-customLink
                    hover:underline p-6'
                    href={'/labs'}>Laboratório</Link>
            </section>
            <ThemeButton />
        </header>
    )
}

export default Navbar