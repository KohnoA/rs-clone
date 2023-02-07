import { useState } from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search />
      <Navigation />

      <button className={ styles.header__add }>+</button>
      <Button text="Login" onClick={ () => setModal(true) } />

      { modal &&  
        <Modal title='Sign In' closeModal={ () => setModal(false) }>
          <Login />
        </Modal>
      }
    </header>
  );
}

export default Header;