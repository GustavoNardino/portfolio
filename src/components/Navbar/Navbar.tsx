"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'

type Props = {}

const Navbar = (props: Props) => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.mobileMenuButton} onClick={() => mobileMenu ? setMobileMenu(false) : setMobileMenu(true)}>
                |||
            </div>
            {mobileMenu &&
                <div className={styles.menuDropdown}>
                    <Link onClick={() => setMobileMenu(false)} className={styles.menulink} href={'/'}>Apresentação</Link>
                    <Link onClick={() => setMobileMenu(false)} className={styles.menulink} href={'/experiences'}>Experiências</Link>
                    <Link onClick={() => setMobileMenu(false)} className={styles.menulink} href={'/labs'}>Laboratório</Link>
                </div>
            }
            <div className={styles.menuLinks}>
                <Link className={styles.menulink} href={'/'}>Apresentação</Link>
                <Link className={styles.menulink} href={'/experiences'}>Experiências</Link>
                <Link className={styles.menulink} href={'/labs'}>Laboratório</Link>
            </div>
        </div>
    )
}

export default Navbar