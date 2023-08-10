import Image from 'next/image'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'

const Home = () => {
  return (
    <PagesLayout title='Apresentação'>
      <section className='flex items-center justify-evenly flex-col md:flex-row '>
        <Image
          className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
          src="/profile.png"
          width={300}
          height={300}
          alt="Profile image" />
        <Image
          className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
          src="/frontimg2.png"
          width={300}
          height={300}
          alt="Profile image" />
        <Image
          className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
          src="/frontimg1.png"
          width={300}
          height={300}
          alt="Profile image" />
      </section>
      <section className='flex flex-col md:flex-row'>
        <div className='m-3 md:w-1/2'>
          <Subtitle>Breve apresentação</Subtitle>
          <Text>Nascido em Curitiba sempre fui inquieto e curioso. Me encanta saber como tudo funciona por trás dos panos, então o mundo da tecnologia é um campo fértil.</Text>
        </div>
        <div className='m-3 md:w-1/2'>
          <Subtitle>Trajetória</Subtitle>
          <Text>Há anos sou fascinado por linguagens de programação e outras tecnologias de desenvolvimento. Ainda na adolescência, em 2007, me divertia com BatScript participando de fóruns de discussões no Orkut. Mais tarde trabalhei com Flash, C# e Unity, entre 2011 e 2015. Atualmente contribuo, sob orientação de metodologias ágeis, em projetos como Desenvolvedor Front End, aplicando conceitos de UX/UI e responsividade. Tenho enorme apreço pelo aprendizado. Tenho paixão pelo universo Linux e Desenvolvimento Full stack.</Text>
        </div>
      </section>
    </PagesLayout>

  )
}

export default Home