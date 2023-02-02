import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={ `containter ${styles.footer}` }
    >
      <div className={ styles.production }>
        <p className={ styles.production__title }>Production:</p>
        <ul className={ styles.production__list }>
          <li className={ styles.production__item }>
            <a href="https://github.com/shamkolovich95" className={ styles.production__link }>shamkolovich95</a>
          </li>
          <li className={ styles.production__item }>
            <a href="https://github.com/Nexuslolz" className={ styles.production__link }>Nexuslolz</a>
          </li>
          <li className={ styles.production__item }>
            <a href="https://github.com/KohnoA" className={ styles.production__link }>KohnoA</a>
          </li>
        </ul>
      </div>

      <p className={ styles.footer__description }>IEAT<sup>®</sup> 2023</p>

      <a
        className={ styles.footer__rss }
        href="https://rs.school/js/"
      ></a>
    </footer>
  );
}

export default Footer;