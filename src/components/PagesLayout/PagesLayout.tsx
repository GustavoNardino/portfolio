import styles from './pageslayout.module.css'

type Props = {
    children: any
    title: string
}

const PagesLayout = ({children, title}: Props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {children}
    </div>
  )
}

export default PagesLayout