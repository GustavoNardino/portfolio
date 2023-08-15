import PagesLayout from '@/components/PagesLayout/PagesLayout'
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  const labId = params.id
  return (
    <PagesLayout className='flex flex-col justify-evenly' title={`Lab #${labId}`}>
      
    </PagesLayout>
  )
}

export default Page