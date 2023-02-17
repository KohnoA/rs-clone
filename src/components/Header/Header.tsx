import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { getSearchList } from '../../store/selectors/searchSelectors';

const Header: React.FC = () => {
  const search = useSelector(getSearchList)
 
=======
import Modal from '../Modal/Modal';
import SignIn from '../userForms/SignIn';
import SignUp from '../userForms/SignUp';
import Profile from '../Profile/Profile';
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

>>>>>>> 4b288f03306da722acefbcbfd4f8353b0c8a8d14
  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search request={search} />
      <Navigation />

      <button className={ styles.header__add }>+</button>

      { !isAuth && <Button text="Sign In" onClick={ openSignInModal } /> }
      { isAuth && <Profile /> }

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