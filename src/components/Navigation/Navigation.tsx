import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={ styles.navigation }>
      <Link to="/" className={ styles.navigation__item }>Recipes</Link>
      <Link to="/constructor" className={ styles.navigation__item }>Constructor</Link>
      <Link to="/articles" className={ styles.navigation__item }>Articles</Link>
      <Link to="/about" className={ styles.navigation__item }>About Us</Link>
    </nav>
  );
}

export default Navigation;