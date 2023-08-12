import React from 'react'
import Link from 'next/link'
import Subtitle from '../Subtitle/Subtitle'
import Image from 'next/image'
import Text from '../Text/Text'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className='bg-customFooterBackground flex flex-col md:flex-row min-h-52 w-full py-8 px-4 md:p-6'>
        <div className='w-full md:w-1/2 flex flex-col mb-6 md:mb-0'>
          <Subtitle>Contato</Subtitle>
          <Link
            target="_blank"
            className='mb-2 text-customLink hover:text-customLink hover:underline'
            href="https://api.whatsapp.com/send?phone=5541991998161">
            Phone / Whatsapp: 41 991998161
          </Link>
          <Link
            target="_blank"
            className='mb-2 text-customLink hover:text-customLink hover:underline'
            href="https://www.linkedin.com/in/gustavo-nardino/">
            Linkedin
          </Link>
          <span className='mb-2 text-customLink hover:text-customLink hover:underline'>E-mail: fgustavo.n@gmail.com</span>
        </div>
        <div className='w-full md:w-1/2 flex items-end justify-end mb-6 md:mb-0'>
          <Text>Desenvolvido com NextJS, Tailwind, Nginx e AWS</Text>
          <Image
            className='rounded shadow-md hover:shadow-indigo-100 ml-4'
            src="/gN.png"
            width={50}
            height={50}
            alt="Logo" />
        </div>
      </footer>
    </>
  )
}

export default Footer