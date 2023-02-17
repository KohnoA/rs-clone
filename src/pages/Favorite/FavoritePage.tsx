import { useSelector } from 'react-redux';
import FavoriteList from '../../components/Favourite/FavoriteList/FavoriteList';
import { URLS } from '../../constants';
import { API_KEY_RECIPES, ID_RECIPES } from '../../constants/foodApi';
import { getFavoriteList } from '../../store/selectors/favoriteSelectors';
import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
    const favArr = useSelector(getFavoriteList)
    return (
        <div className={styles.favoritePage}>
            <h1>Favorite recipes</h1>
        <div className={styles.favoritePage__wrapper}>
            {favArr.length > 0
            ? favArr.map((id: string) =>  <FavoriteList key={id} url={`${URLS.recipe}${id}?type=public&app_id=${ID_RECIPES}&app_key=${API_KEY_RECIPES}`}/> )
            : <h1>There is no favorite recipes yet.</h1>}
        </div>
        </div>
    );
    
};

export default FavoritePage;