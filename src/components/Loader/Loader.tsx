import loader from '../../assets/icons/loader.gif'
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.loaderImg} src={loader} alt='loader' />
    </div>
  )
}

export default Loader
