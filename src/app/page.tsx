import Image from 'next/image'
import styles from './page.module.css'
import PagesLayout from '@/components/PagesLayout/PagesLayout'

const Home = () => {
  return (
    <PagesLayout title='Apresentação'>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/profile.png"
          width={300}
          height={300}
          alt="Profile image" />
        <div>
          <h4 className={styles.text}>Breve apresentação</h4>
          <p className={styles.text}>Nascido em Curitiba sempre fui inquieto e curioso. Me encanta saber como tudo funciona por trás dos panos, então o mundo da tecnologia é um campo fértil.</p>

        </div>
        <div>
          <h4 className={styles.text}>Um pouco da minha trajetória</h4>
          <p className={styles.text}>Há anos sou fascinado por linguagens de programação e outras tecnologias de desenvolvimento. Ainda na adolescência, em 2007, me divertia com BatScript participando de fóruns de discussões no Orkut. Mais tarde trabalhei com Flash, C# e Unity, entre 2011 e 2015. Atualmente contribuo, sob orientação de metodologias ágeis, em projetos como Desenvolvedor Front End, aplicando conceitos de UX/UI e responsividade. Tenho enorme apreço pelo aprendizado. Tenho paixão pelo universo Linux e Desenvolvimento Full stack.</p>

        </div>
      </div>
    </PagesLayout>
  )
}

export default Home