import React from 'react'
import Markdown from 'markdown-to-jsx';
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'
import { getLabData, getLabReadme } from '@/services/labsDataService'
import styles from './styles.module.css'

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getLabData(params.slug)
  const readmeFile = await getLabReadme(params.slug)
  return (
    <PagesLayout className='flex flex-col justify-evenly' title={`Lab #${data.id}`}>
      <Subtitle>{data.name}</Subtitle>
      <Text>{data.description}</Text>
      <fieldset className={`${styles.teste} border-2 border-customText text-customText p-6 mt-8`}>
        <legend className='px-4'>README.md</legend>
        <Markdown>
          {readmeFile}
        </Markdown>
      </fieldset>
    </PagesLayout>
  )
}

export default Page