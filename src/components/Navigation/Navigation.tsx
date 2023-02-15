import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={ styles.navigation }>
      <Link to="/" className={ styles.navigation__item }>Recipes</Link>
      <Link to="/constructor" className={ styles.navigation__item }>Constructor</Link>
      <Link to="/calculater" className={ styles.navigation__item }>Calculater</Link>
      <Link to="/about" className={ styles.navigation__item }>About Us</Link>
    </nav>
  );
}

export default Navigation;