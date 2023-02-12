import { useFetching } from '../../../hooks/useFetching';
import { IRecipeFavorite, IRecipes } from '../../../types/types';
import RecipeService from '../../API/RecipeService';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';
import iconType from '../../../assets/icons/food.svg'
import kcalIcon from '../../../assets/icons/kcal.svg'
import LoaderFav from '../../Loader/LoaderFav/LoaderFav';
import styles from './FavoriteList.module.scss';


const FavoriteList: React.FC<IRecipes> = ({url}: IRecipes) => {
    const [recipes, setRecipes] = useState<IRecipeFavorite>({})

    const [fetchingRecipes, isRecipesLoading, errorRecipes] = useFetching(async() => {
        const response = await RecipeService.getRecipes(`${url}`)
        setRecipes(response.recipe)
    })

    const extractUri = (): string | undefined => {
        const mainLink = recipes.uri
        if (!mainLink) return
        const uri = mainLink.slice(mainLink.indexOf('_') + 1)
        return(uri)
}

    useEffect(() => {
      fetchingRecipes()
    }, [])
    
    return (
        <div className={styles.favoritePage__wrapper}>
        {errorRecipes && 
            <div style={{margin:'2em'}}><h1>Error has occured. {errorRecipes}</h1></div>}
            {isRecipesLoading &&
                   <LoaderFav/>}
                          <RecipeCard  
                          route='favorite'
                          key={1}
                          id={extractUri()}
                          header={recipes.cuisineType}
                          image={recipes.image}
                          type={recipes.dishType}
                          typeIcon={iconType}
                          kcalIcon={kcalIcon}
                          kcal={Math.round(Number(recipes.calories))}
                          title={recipes.label}
                    />
        </div>
    );
};

export default FavoriteList;