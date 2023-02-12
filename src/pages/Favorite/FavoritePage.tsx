import {useContext, useState} from 'react';
import RecipeService from '../../components/API/RecipeService';
import { FavoriteArrContext } from '../../components/Favourite/FavoriteBtn/FavoriteBtn';
import FavoriteList from '../../components/Favourite/FavoriteList/FavoriteList';
import { URLS } from '../../constants';
import { API_KEY_RECIPE, ID_RECIPE } from '../../constants/foodApi';
import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
    const favArr = useContext(FavoriteArrContext)

    return (
        <div className={styles.favoritePage}>
            <h1>Favorite recipes</h1>
        <div className={styles.favoritePage__wrapper}>
            {favArr.length > 0
            ? favArr.map((id: string, i: number) =>  <FavoriteList key={i} url={`${URLS.recipe}${id}?type=public&app_id=${ID_RECIPE}&app_key=${API_KEY_RECIPE}`}/> )
            : <h1>There is no favorite recipes yet.</h1>}
        </div>
        </div>
    );
    
};

export default FavoritePage;