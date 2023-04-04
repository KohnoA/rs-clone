import styles from './404.module.scss'

const PageNotFound: React.FC = () => {
  return (
    <div className={`container page ${styles.notFound}`}>
      <p className={styles.notFound__code}>404</p>
      <p className={styles.notFound__desc}>Page Not Found</p>
    </div>
  )
}

export default PageNotFound
