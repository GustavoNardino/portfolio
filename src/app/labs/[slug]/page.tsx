import React from 'react'
import Markdown from 'markdown-to-jsx';
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'
import { getLabData, getLabReadme } from '@/services/labsDataService'
import styles from './styles.module.css'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs'
import { IRepoLab } from '@/interfaces/RepoLab';


const Page = async ({ params }: { params: { slug: string } }) => {
  const data: IRepoLab = await getLabData(params.slug)
  const readmeFile: string = await getLabReadme(params.slug)

  return (
    <PagesLayout className='w-full flex flex-col justify-evenly' title={`Lab #${data.id}`}>
      <Link
        target="_blank"
        className='text-customLink hover:text-customLink hover:underline flex mb-6 items-center'
        href={data.html_url ? data.html_url : ''}><BsGithub size='34' className='mx-4' />Abra no GitHub</Link>
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