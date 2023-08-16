import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React, { Suspense } from 'react'
import Text from '@/components/Text/Text'
import { Metadata } from 'next'
import Infobox from '@/components/Infobox/Infobox'
import Subtitle from '@/components/Subtitle/Subtitle'
import { getLabListData } from '@/services/labsDataService'
import { IRepoLab } from '@/interfaces/RepoLab'
import { convertDateFormat } from '@/utils/basics'

export const metadata: Metadata = {
    title: 'Laboratório',
    description: 'Meus projetos pessoais de estudo',
    alternates: {
        canonical: `/labs`,
    },
}

const Labs = async () => {
    const data = await getLabListData()
    return (
        <PagesLayout title='Laboratório'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 xxl:px-20'>
                <Suspense fallback='Carregando...'>
                    {data.map(
                        (item: IRepoLab) => {
                            return (
                                <Infobox slug={item.name} key={item.id} className='bg-customFooterBackground'>
                                    <Subtitle>{item.name}</Subtitle>
                                    <Text>Linguagem: {item.language}</Text>
                                    <Text>Atualizado em: {convertDateFormat(item.pushed_at)}</Text>
                                    <Text className='mt-2 underline'>{item.description ? item.description : ''}</Text>
                                </Infobox>
                            )
                        }
                    )}
                </Suspense>
            </div>
        </PagesLayout>
    )
}

export default Labs