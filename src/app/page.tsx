import { Metadata } from 'next'
import Image from 'next/image'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'
import InfoSection from '@/components/InfoSection/InfoSection'


export const metadata: Metadata = {
  title: 'Apresentação | Gustavo Nardino',
  description: 'Um pouco da minha história e carreira na programação.',
  alternates: {
    canonical: `/`,
  },
}

const Home = () => {
  return (
    <PagesLayout title='Apresentação'>
      <InfoSection>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-end'>
          <Image
            className='mx-3 my-6 rounded-full w-72 h-72 shadow-md shadow-customText'
            src="/profile.png"
            width={288}
            height={288}
            alt="Profile image" />
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-start justify-center'>
          <Subtitle>Breve apresentação:</Subtitle>
          <Text>Nascido em Curitiba sempre fui inquieto e curioso. Me encanta saber como tudo funciona por trás dos panos, então o mundo da tecnologia é um campo fértil.</Text>
        </div>
      </InfoSection>
      <InfoSection reverse>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-end md:text-right justify-center'>
          <Subtitle>Como vim parar aqui?</Subtitle>
          <Text>Há anos sou fascinado por linguagens de programação e outras tecnologias de desenvolvimento. Ainda na adolescência, em 2007, me divertia com BatScript participando de fóruns de discussões no Orkut. Mais tarde trabalhei com Flash, Javascript e Unity, entre 2011 e 2015. Atualmente contribuo, sob orientação de metodologias ágeis, em projetos como Desenvolvedor Front End, aplicando conceitos de UX/UI, responsividade e Server Side Rendering. Tenho enorme apreço pelo aprendizado, paixão pelo universo Linux e Desenvolvimento Full stack.</Text>
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-start'>
          <Image
            className='mx-3 my-6 rounded-full w-72 h-72 shadow-md shadow-customText'
            src="/frontimg1.png"
            width={288}
            height={288}
            alt="Profile image" />
        </div>
      </InfoSection>
      <InfoSection>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-end'>
          <Image
            className='mx-3 my-6 rounded-full w-72 h-72 shadow-md shadow-customText'
            src="/frontimg2.png"
            width={288}
            height={288}
            alt="Profile image" />
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-start justify-center'>
          <Subtitle>Pessoalmente...</Subtitle>
          <Text>Gosto de aproveitar meu tempo com música e leitura. Para mim, a arte é o que há de mais especial em estar vivo. Portanto, trabalho sempre com o olhar de um artesão, cuidadoso em busca da beleza.</Text>
        </div>
      </InfoSection>
    </PagesLayout>

  )
}

export default Home