import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <span className={ styles.logo__image }></span>
      <h1 className={ styles.logo__text }>Ieat</h1>
    </Link>
  );
}

export default Logo;