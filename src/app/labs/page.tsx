import { Metadata } from 'next'
import React from 'react'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Text from '@/components/Text/Text'
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
    const data: IRepoLab[] = await getLabListData()
    console.log(data)
    return (
        <PagesLayout title='Laboratório'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 xxl:px-20'>
                {data.map(
                    (item: IRepoLab) => {
                        return (
                            <Infobox slug={item.name} key={item.id} className='bg-customFooterBackground'>
                                <Subtitle>{item.name}</Subtitle>
                                <Text>Linguagem: {item.language}</Text>
                                <Text>Atualizado em: {convertDateFormat(item.pushed_at)}</Text>
                                <Text
                                    title={item.description}
                                    className='mt-2 underline'>{item.description}
                                </Text>
                            </Infobox>
                        )
                    }
                )}
            </div>
        </PagesLayout>
    )
}

export default Labs