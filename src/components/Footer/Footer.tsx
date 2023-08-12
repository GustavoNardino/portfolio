import React from 'react'
import Link from 'next/link'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import { FaAws } from 'react-icons/fa'
import { SiNginx, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

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
        <div className='w-full md:w-1/2 flex md:items-end md:justify-end mb-6 md:mb-0'>
          <div className='flex items-center md:justify-end w-full'>
            <Text>Desenvolvido com: </Text>
            <Link
              target="_blank"
              href="https://nextjs.org/docs">
              <SiNextdotjs
                size='32'
                className='text-customText hover:opacity-50 mx-1 cursor-pointer' />
            </Link>
            <Link
              target="_blank"
              href="https://tailwindcss.com/docs/installation">
              <SiTailwindcss
                size='32'
                className='text-customText hover:opacity-50 mx-1 cursor-pointer' />
            </Link>
            <Link
              target="_blank"
              href="http://nginx.org/en/docs/">
              <SiNginx
                size='32'
                className='text-customText hover:opacity-50 mx-1 cursor-pointer' />
            </Link>
            <Link
              target="_blank"
              href="https://aws.amazon.com">
              <FaAws
                size='36'
                className='text-customText hover:opacity-50 mx-1 cursor-pointer' />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer