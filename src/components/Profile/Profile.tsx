import styles from './Profile.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { removeUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'
import { getAuth, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { openModal } from '../../store/slices/modalSlice'
import { ModalContent } from '../../constants/constants'

const Profile: React.FC = () => {
  const [select, setSelect] = useState<boolean>(false)
  const { name } = useAuth()
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
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
    <div
      className={select ? `${styles.profile} ${styles.profile__active}` : styles.profile}
      onMouseOver={() => setSelect(true)}
      onMouseOut={() => setSelect(false)}
    >
      Hi, {name ? name : 'User'}!<span className={styles.profile__image}></span>
      <div className={`${styles.profile__select} ${select ? styles.profile__select_active : ''}`}>
        <div className={styles.profile__item}>
          <Link to='/favorite' className={styles.profile__item}>
            Favorites
          </Link>
        </div>
        <div className={styles.profile__item} onClick={logOutHandler}>
          Log out
        </div>
      </div>
    </div>
  )
}

export default Profile
