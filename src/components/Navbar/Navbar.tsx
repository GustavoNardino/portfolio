import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className={styles.container}>
            <Link className={styles.menulink} href={'/'}>Home</Link>
            <Link className={styles.menulink} href={'/experiences'}>Experiências</Link>
        </div>
    )
}

export default Navbar