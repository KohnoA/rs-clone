import styles from './LoaderFav.module.scss'
import loader from '../../../assets/icons/loaderFavorite.gif'

const LoaderFav: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.loaderImg} src={loader} alt='loader' />
    </div>
  )
}

export default LoaderFav
