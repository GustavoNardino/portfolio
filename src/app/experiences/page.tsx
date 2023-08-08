import styles from './page.module.css'
import PagesLayout from '@/components/PagesLayout/PagesLayout'

const Experiences = () => {
    return (
        <PagesLayout title='Experiências'>
            <h4 className={styles.title}>Linguagens</h4>
            <p className={styles.text}>Javascript / Typescript</p>
            <p className={styles.text}>Python</p>

            <h4 className={styles.title}>Frameworks e Bibliotecas</h4>
            <p className={styles.text}>Next JS</p>
            <p className={styles.text}>React JS</p>
            <p className={styles.text}>Redux Toolkit</p>

            <h4 className={styles.title}>Fluxo de dados e performance</h4>
            <p className={styles.text}>Rest API</p>
            <p className={styles.text}>SEO</p>
            <p className={styles.text}>Server Side e Static rendering</p>

            <h4 className={styles.title}>Estilos</h4>
            <p className={styles.text}>CSS</p>
            <p className={styles.text}>Bootstrap</p>
            <p className={styles.text}>Styled Components</p>

            <h4 className={styles.title}>DevOps</h4>
            <p className={styles.text}>Linux / Bash</p>
            <p className={styles.text}>AWS EC2 Instances</p>
            <p className={styles.text}>Docker</p>

        </PagesLayout>
    )
}

export default Experiences