import styles from './Footer.module.scss'
import { GITHUB_ACCOUNTS } from '../../constants/constants'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`container ${styles.footer}`}>
        <div className={styles.production}>
          <p className={styles.production__title}>Production:</p>
          <ul className={styles.production__list}>
            {GITHUB_ACCOUNTS.map(item => 
              <li key={item} className={styles.production__item}>
                <a href={item} className={styles.production__link}>
                  {item.split('/').at(-1)}
                </a>
              </li>
            )}
          </ul>
        </div>

        <p className={styles.footer__description}>
          IEAT<sup>®</sup> 2023
        </p>

        <a className={styles.footer__rss} href='https://rs.school/js/'></a>
      </div>
    </footer>
  )
}

export default Footer
