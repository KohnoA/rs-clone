import styles from './Profile.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeUser } from '../../store/slices/userSlice';

const Profile: React.FC = () => {
  const [select, setSelect] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(removeUser());
  }

  const myRecipesHandler = () => console.log('Go to my recipes');

  const favoritesHandler = () => console.log('Go to my favorites');

  return (
    <div 
      className={ select ? `${styles.profile} ${styles.profile__active}` : styles.profile }
      onClick={ () => setSelect((prev) => !prev) }
    >
      Hello, User!
      <span className={ styles.profile__image }></span>

      { select && 
        <div className={ styles.profile__select }>
          <div className={ styles.profile__item } onClick={ myRecipesHandler }>My recipes</div>
          <div className={ styles.profile__item } onClick={ favoritesHandler }>Favorites</div>
          <div className={ styles.profile__item } onClick={ logOutHandler }>Log out</div>
        </div> 
      }
    </div>
  );
}

export default Profile;