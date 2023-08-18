import { Metadata } from 'next'
import Subtitle from '@/components/Subtitle/Subtitle'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Text from '@/components/Text/Text'

export const metadata: Metadata = {
    title: 'Experiências',
    description: 'Tecnologias com as quais trabalho e estudo',
    alternates: {
        canonical: `/experiences`,
    },
}

const Experiences = () => {
    return (
        <PagesLayout className='flex flex-col justify-evenly' title='Experiências'>
            <div className='md:flex justify-evenly bg-customFooterBackground'>
                <div className=' w-full flex flex-col md:items-end border-b-2 border-t-2 border-customTitle p-3'>
                    <Subtitle>Front-end</Subtitle>
                    <Text>Javascript / Typescript</Text>
                    <Text>Next JS</Text>
                    <Text>React JS</Text>
                    <Text>Redux Toolkit</Text>
                    <Text>SEO</Text>
                    <Text>Server Side e Static rendering</Text>
                    <Text>CSS</Text>
                    <Text>Bootstrap</Text>
                    <Text>Tailwind</Text>
                    <Text>Styled Components</Text>
                </div>
                <div className=' w-full flex flex-col md:items-center border-b-2 border-t-2 border-customTitle p-3'>
                    <Subtitle>Back-end</Subtitle>
                    <Text>Python</Text>
                    <Text>FastAPI</Text>
                    <Text>SQLAlchemy</Text>
                    <Text>Pydantic</Text>
                    <Text>Rest API</Text>
                </div>
                <div className=' w-full flex flex-col md:items-start border-b-2 border-t-2 border-customTitle p-3'>
                    <Subtitle>DevOps</Subtitle>
                    <Text>Linux / Bash</Text>
                    <Text>AWS EC2</Text>
                    <Text>Docker</Text>
                </div>
            </div>
            <div className='md:p-12'>
                <Subtitle>Informação:</Subtitle>
                <ul>
                    <Text>Entre estas tecnologias listadas, na coluna Front-end tenho maiores experiências profissionais comprovadas.</Text>
                    <Text>Atualmente meus estudos estão mais frequentemente voltados à coluna Back-end e DevOps, praticando o aprendizado neste site e em outros pequenos projetos.</Text>
                    <Text>O objetivo é ser capaz de desenvolver uma aplicação do início ao fim de forma sólida e escalável</Text>
                </ul>
            </div>
        </PagesLayout>
    )
}

export default Experiences