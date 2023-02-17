/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useNavigate } from 'react-router-dom';
import { IRecipeCard } from '../../types/types';
import FavouriteBtn from '../Favourite/FavoriteBtn/FavoriteBtn';
import LazyLoader from '../Loader/LazyLoader/LazyLoader';
import styles from './RecipeCard.module.scss'

const RecipeCard: React.FC<IRecipeCard> = ({route, id, header, title, image, type = 'happy meal', typeIcon, kcalIcon, kcal}: IRecipeCard) => {

    const router = useNavigate()
  
    return (
        <div onClick={() => router(`/${route}/${id}`)} id={id} className={styles.card}>
            <div className={styles.card__headerPanel}>
                <h3 className={styles.card__header}>{header}</h3>
                <FavouriteBtn cardId={id!}/>
            </div>
            <LazyLoader src={image} alt='recipe image' />
                {/* <img className={styles.card__img} src={image} alt='recipe image'/> */}
                <div className={styles.cardParams__wrapper}>
                    <div className={styles.cardParams__item}>
                    <img className={styles.cardParams__img} src={typeIcon} />
                    <span>{type}</span></div>
                    <div className={styles.cardParams__item}>
                    <img className={styles.cardParams__img} src={kcalIcon} alt="kcal icon" />
                    <span>{kcal}</span></div>
                </div>
                <p className={styles.card__content}>{title}</p>
        </div>
    );
};

export default RecipeCard;
