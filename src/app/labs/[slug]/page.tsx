import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'
import { getLabData, getLabReadme } from '@/services/labsDataService'
import React from 'react'


const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getLabData(params.slug)
  const readmeFile = await getLabReadme(params.slug)
  console.log(readmeFile.download_url)
  
  return (
    <PagesLayout className='flex flex-col justify-evenly' title={`Lab #${data.id}`}>
      <Subtitle>{data.name}</Subtitle>
      <Text>{data.description}</Text>
      <Text>README.md</Text>
      <Text>{readmeFile.content}</Text>
      
    </PagesLayout>
  )
}

export default Page