import { useState } from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SignIn from '../userForms/SignIn';
import SignUp from '../userForms/SignUp';

const enum UserForms {
  signIn = 'Sign In',
  signUp = 'Sign Up'
}

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [form, setForm] = useState<UserForms>(UserForms.signIn);

  const closeModalHandler = () => {
    setModal(false);
    setForm(UserForms.signIn);
  }

  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search />
      <Navigation />

      <button className={ styles.header__add }>+</button>
      <Button text="Sign In" onClick={ () => setModal(true) } />

      { modal &&  
        <Modal title={ form } closeModal={ closeModalHandler }>
          { form === UserForms.signIn && <SignIn changeForm={ () => setForm(UserForms.signUp) } /> }
          { form === UserForms.signUp && <SignUp changeForm={ () => setForm(UserForms.signIn) } /> }
        </Modal>
      }
    </header>
  );
}

export default Header;