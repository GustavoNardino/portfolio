import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React from 'react'
import styles from './labs.module.css'

type Props = {}

const Labs = (props: Props) => {
    return (
        <PagesLayout title='Laboratório'>
            <p className={styles.text}>grid de cards que leval pra outra page, cada card corresponde a um tema que eu estou estudando</p>
        </PagesLayout>
    )
}

export default Labs