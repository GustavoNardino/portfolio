import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React from 'react'
import Text from '@/components/Text/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Laboratório',
    description: 'Meus projetos pessoais de estudo',
    alternates: {
        canonical: `/labs`,
    },
}

const Labs = () => {
    return (
        <PagesLayout title='Laboratório'>
            <Text>grid de cards que leval pra outra page, cada card corresponde a um tema que eu estou estudando</Text>
        </PagesLayout>
    )
}

export default Labs