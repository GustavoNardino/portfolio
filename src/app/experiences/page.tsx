import Subtitle from '@/components/Subtitle/Subtitle'
import PagesLayout from '@/components/PagesLayout/PagesLayout'
import Text from '@/components/Text/Text'
import Infobox from '@/components/Infobox/Infobox'

const Experiences = () => {
    return (
        <PagesLayout className='lg:grid lg:grid-cols-2' title='Experiências'>
            <Infobox className='lg:justify-self-end'>
                <Subtitle>Linguagens</Subtitle>
                <Text>Javascript / Typescript</Text>
                <Text>Python</Text>
            </Infobox>
            <Infobox className=''>
                <Subtitle>Frameworks e Bibliotecas</Subtitle>
                <Text>Next JS</Text>
                <Text>React JS</Text>
                <Text>Redux Toolkit</Text>
            </Infobox>
            <Infobox className='lg:justify-self-end'>
                <Subtitle>Fluxo de dados e performance</Subtitle>
                <Text>Rest API</Text>
                <Text>SEO</Text>
                <Text>Server Side e Static rendering</Text>
            </Infobox>
            <Infobox className=''>
                <Subtitle>Estilos</Subtitle>
                <Text>CSS</Text>
                <Text>Bootstrap</Text>
                <Text>Tailwind</Text>
                <Text>Styled Components</Text>
            </Infobox>
            <Infobox className='lg:justify-self-end'>
                <Subtitle>DevOps</Subtitle>
                <Text>Linux / Bash</Text>
                <Text>AWS EC2 Instances</Text>
                <Text>Docker</Text>
            </Infobox>
        </PagesLayout>
    )
}

export default Experiences