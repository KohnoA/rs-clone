import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SignIn from '../userForms/SignIn';
import SignUp from '../userForms/SignUp';
import { openModal } from '../../store/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { ModalContent } from '../../constants/constants';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const {isOpen, content} = useAppSelector(state => state.modal);
  const {isAuth} = useAuth();
  const dispatch = useAppDispatch();

  const openSignInModal = () => {
    dispatch(openModal({
      isOpen: true,
      content: ModalContent.signIn
    }));
  }

  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search />
      <Navigation />

      <button className={ styles.header__add }>+</button>

      { !isAuth && <Button text="Sign In" onClick={ openSignInModal } /> }
      { isAuth && <Button text="Profile" /> }

      { isOpen &&  
        <Modal title={ content }>
          { content === ModalContent.signIn && <SignIn /> }
          { content === ModalContent.signUp && <SignUp /> }
        </Modal>
      }
    </header>
  );
}

export default Header;