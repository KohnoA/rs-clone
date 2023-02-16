import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { getSearchList } from '../../store/selectors/searchSelectors';

const Header: React.FC = () => {
  const search = useSelector(getSearchList)
 
  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search request={search} />
      <Navigation />

      <button className={ styles.header__add }>+</button>
      <Button text="Login"/>
    </header>
  );
}

export default Header;