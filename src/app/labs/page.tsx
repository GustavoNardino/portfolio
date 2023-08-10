import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React from 'react'
import Text from '@/components/Text/Text'

type Props = {}

const Labs = (props: Props) => {
    return (
        <PagesLayout title='Laboratório'>
            <Text>grid de cards que leval pra outra page, cada card corresponde a um tema que eu estou estudando</Text>
        </PagesLayout>
    )
}

export default Labs