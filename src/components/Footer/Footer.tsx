import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>Contatos</h4>
        <Link className={styles.menulink} href="https://api.whatsapp.com/send?phone=5541991998161">Phone / Whatsapp: 41 991998161</Link>
        <Link className={styles.menulink} href="https://www.linkedin.com/in/gustavo-nardino/">Linkedin</Link>
        <p className={styles.menulink}>E-mail: fgustavo.n@gmail.com</p>
      </div>
    </>
  )
}

export default Footer