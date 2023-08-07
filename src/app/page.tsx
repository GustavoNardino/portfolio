import styles from './page.module.css'
import PagesLayout from '@/components/PagesLayout/PagesLayout'

const Home = () => {
  return (
    <PagesLayout title='Apresentação'>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam est modi repellat recusandae saepe laboriosam sapiente dolorum ea? Eligendi quia in inventore molestiae animi modi tempora sapiente eaque minima.</p>
    </PagesLayout>
  )
}

export default Home