import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className={styles.container}>
            <Link className={styles.menulink} href={'/'}>Apresentação</Link>
            <Link className={styles.menulink} href={'/experiences'}>Experiências</Link>
            <Link className={styles.menulink} href={'/labs'}>Laboratório</Link>
        </div>
    )
}

export default Navbar