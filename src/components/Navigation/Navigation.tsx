import { getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContent } from '../../constants/constants'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useAuth } from '../../hooks/useAuth'
import { openModal } from '../../store/slices/modalSlice'
import { removeUser } from '../../store/slices/userSlice'
import Button from '../Button/Button'
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
  const { isAuth } = useAuth()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    setIsOpen(false)
  }

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const openSignInModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        content: ModalContent.signIn,
      }),
    )
  }

  const logOutHandler = async () => {
    const auth = getAuth()

    try {
      await signOut(auth)
      navigate('/')
      openSignInModal()
      dispatch(removeUser())
    } catch (error) {
      if (error instanceof Error) console.error(error.message)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        text={isOpen ? 'Close' : 'Menu'}
        additionalClasses={styles.navBtn}
      />
      <nav className={`${styles.navigation} ${isOpen ? styles.navigation_active : ''}`}>
        <Link onClick={() => setIsOpen(false)} to='/recipes' className={styles.navigation__item}>
          Recipes
        </Link>
        <Link onClick={() => setIsOpen(false)} to='/constructor' className={styles.navigation__item}>
          Constructor
        </Link>
        <Link onClick={() => setIsOpen(false)} to='/calculator' className={styles.navigation__item}>
          Calculator
        </Link>
        <Link onClick={() => setIsOpen(false)} to='/about' className={styles.navigation__item}>
          About Us
        </Link>
        <div onClick={closeMenu} className={styles.navProfile__wrapper}>
          {!isAuth && <Button additionalClasses={styles.profile__wrapper} text='Sign In' onClick={openSignInModal} />}
          {isAuth && (
            <>
              <Link to='/cabinet' className={styles.navigation__item}>
                Cabinet
              </Link>
              <Button text='Log out' additionalClasses={'s'} onClick={logOutHandler}></Button>
            </>
          )}
        </div>
      </nav>
      <div
        onClick={() => setIsOpen(false)}
        className={`${styles.navOverlay} ${isOpen ? styles.navOverlay_active : ''}`}
      ></div>
    </>
  )
}

export default Navigation
