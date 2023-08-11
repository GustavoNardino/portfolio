import Image from 'next/image'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Subtitle from '@/components/Subtitle/Subtitle'
import Text from '@/components/Text/Text'
import InfoSection from '@/components/InfoSection/InfoSection'

const Home = () => {
  return (
    <PagesLayout title='Apresentação'>
      <InfoSection>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-end'>
          <Image
            className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
            src="/profile.png"
            width={300}
            height={300}
            alt="Profile image" />
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-start justify-center'>
          <Subtitle>Breve apresentação</Subtitle>
          <Text>Nascido em Curitiba sempre fui inquieto e curioso. Me encanta saber como tudo funciona por trás dos panos, então o mundo da tecnologia é um campo fértil.</Text>
        </div>
      </InfoSection>
      <InfoSection reverse>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-end md:text-right justify-center'>
          <Subtitle>Trajetória</Subtitle>
          <Text>Há anos sou fascinado por linguagens de programação e outras tecnologias de desenvolvimento. Ainda na adolescência, em 2007, me divertia com BatScript participando de fóruns de discussões no Orkut. Mais tarde trabalhei com Flash, C# e Unity, entre 2011 e 2015. Atualmente contribuo, sob orientação de metodologias ágeis, em projetos como Desenvolvedor Front End, aplicando conceitos de UX/UI e responsividade. Tenho enorme apreço pelo aprendizado. Tenho paixão pelo universo Linux e Desenvolvimento Full stack.</Text>
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-start'>
          <Image
            className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
            src="/frontimg1.png"
            width={300}
            height={300}
            alt="Profile image" />
        </div>
      </InfoSection>
      <InfoSection>
        <div className='m-3 md:px-12 md:w-1/2 flex items-center justify-center md:justify-end'>
          <Image
            className='mx-3 my-6 rounded-full shadow-md hover:shadow-indigo-100 hover:-rotate-2'
            src="/frontimg2.png"
            width={300}
            height={300}
            alt="Profile image" />
        </div>
        <div className='m-3 md:px-12 md:w-1/2 flex flex-col items-center md:items-start justify-center'>
          <Subtitle>Outras infos</Subtitle>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime neque expedita dolorem ex, facere officiis harum illo cupiditate dolores nesciunt eveniet. Dignissimos delectus dolor cum culpa ut maiores, iure consectetur.</Text>
        </div>
      </InfoSection>
    </PagesLayout>

  )
}

export default Home