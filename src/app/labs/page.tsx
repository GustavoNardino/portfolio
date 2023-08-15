import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React, { Suspense } from 'react'
import Text from '@/components/Text/Text'
import { Metadata } from 'next'
import Infobox from '@/components/Infobox/Infobox'
import Subtitle from '@/components/Subtitle/Subtitle'
import { getLabListData } from '@/services/labsDataService'

export const metadata: Metadata = {
    title: 'Laboratório',
    description: 'Meus projetos pessoais de estudo',
    alternates: {
        canonical: `/labs`,
    },
}
interface ILista {
    id: number;
    name: string;
}


const Labs = async () => {
    const data = await getLabListData()
    const lista: ILista[] = [
        {
            id: 0,
            name: 'Teste 0'
        },
        {
            id: 1,
            name: 'Teste 1'
        },
        {
            id: 2,
            name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore totam enim consectetur. Ad debitis tenetur, id odio dolorem unde nam maiores neque dicta quis dolorum quam at, illo officiis?'
        },
        {
            id: 3,
            name: 'Teste 3'
        },
        {
            id: 4,
            name: 'Teste 4'
        },
        {
            id: 5,
            name: 'Teste 5'
        },
        {
            id: 6,
            name: 'Teste 6'
        },
        {
            id: 7,
            name: 'Teste 7'
        },
        {
            id: 8,
            name: 'Teste 8'
        },
        {
            id: 9,
            name: 'Teste 9'
        },
        {
            id: 10,
            name: 'Teste 10'
        },
        {
            id: 11,
            name: 'Teste 11'
        },
    ]

    return (
        <PagesLayout title='Laboratório'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 xxl:px-20'>
                <Suspense fallback='Carregando...'>
                {data.labList.map(
                    (item: ILista) => {
                        return (
                            <Infobox id={item.id} key={item.id} className='bg-customFooterBackground'>
                                <Subtitle>Título {item.id}</Subtitle>
                                <Text>{item.name}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.name}</Text>
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