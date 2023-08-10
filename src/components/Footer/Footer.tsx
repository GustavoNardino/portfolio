import React from 'react'
import Link from 'next/link'
import Subtitle from '../Subtitle/Subtitle'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className='bg-slate-700 flex min-h-52 w-full py-8 px-4 md:p-6'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <Subtitle>Contato</Subtitle>
          <Link target="_blank" className='mb-2 text-indigo-100 hover:text-indigo-400 hover:underline' href="https://api.whatsapp.com/send?phone=5541991998161">Phone / Whatsapp: 41 991998161</Link>
          <Link target="_blank" className='mb-2 text-indigo-100 hover:text-indigo-400 hover:underline' href="https://www.linkedin.com/in/gustavo-nardino/">Linkedin</Link>
          <span className='mb-2 text-indigo-100 hover:text-indigo-400 hover:underline'>E-mail: fgustavo.n@gmail.com</span>
        </div>
        <div className='w-full md:w-1/2 flex items-end justify-end'>
          <Image
            className='rounded shadow-md hover:shadow-indigo-100'
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