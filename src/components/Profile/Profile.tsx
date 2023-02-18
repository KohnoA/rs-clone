import styles from './Profile.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';

const Profile: React.FC = () => {
  const [select, setSelect] = useState<boolean>(false);
  const {name} = useAuth();
  const dispatch = useAppDispatch();

  const logOutHandler = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      dispatch(removeUser());

    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  const myRecipesHandler = () => console.log('Go to my recipes');

  const favoritesHandler = () => console.log('Go to my favorites');

  return (
    <div 
      className={ select ? `${styles.profile} ${styles.profile__active}` : styles.profile }
      onMouseOver={ () => setSelect(true) }
      onMouseOut={ () => setSelect(false) }
    >
      Hi, { name ? name : 'User' }!
      <span className={ styles.profile__image }></span>

      <div className={ `${styles.profile__select} ${select ? styles.profile__select_active : ''}` }>
        <div className={ styles.profile__item } onClick={ myRecipesHandler }>My recipes</div>
        <div className={ styles.profile__item } onClick={ favoritesHandler }>Favorites</div>
        <div className={ styles.profile__item } onClick={ logOutHandler }>Log out</div>
      </div>
    </div>
  );
}

export default Profile;