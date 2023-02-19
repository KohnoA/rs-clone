import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={ styles.navigation }>
      <Link to="/constructor" className={ styles.navigation__item }>Constructor</Link>
      <Link to="/calculator" className={ styles.navigation__item }>Calculator</Link>
      <Link to="/about" className={ styles.navigation__item }>About Us</Link>
    </nav>
  );
}

export default Navigation;