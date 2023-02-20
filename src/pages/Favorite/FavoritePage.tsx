import { useSelector } from 'react-redux';
import FavoriteList from '../../components/Favourite/FavoriteList/FavoriteList';
import { getFavoriteList } from '../../store/selectors/favoriteSelectors';
import styles from './FavoritePage.module.scss';
import * as API from '../../constants/foodApi'
import {useMemo} from 'react'

const FavoritePage = () => {
    const favArr = useSelector(getFavoriteList)

    const url = useMemo(() => {
        const params = new URLSearchParams('')
        params.set('type', API.TYPE)
        params.set('app_id', API.ID_RECIPES)
        params.set('app_key', API.API_KEY_RECIPES)

        return (id: string) => `${API.DOMAIN}/${API.RECIPES}/${id}?${String(params)}`
    }, [] )

    return (
        <div className={styles.favoritePage}>
            <h1>Favorite recipes</h1>
        <div className={styles.favoritePage__wrapper}>
        <div className={styles.cardWrapper}>

            {favArr.length > 0
            ? favArr.map((id: string) =>  <FavoriteList key={id} url={url(id)}/> )
            : <h1>There is no favorite recipes yet.</h1>}
        </div>
        </div>
        </div>
    );

};

export default FavoritePage;
