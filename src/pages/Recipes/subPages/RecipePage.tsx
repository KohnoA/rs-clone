import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeService from '../../../components/API/RecipeService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../../../components/Loader/Loader';
import { URLS } from '../../../constants';
import { IRecipeInfo } from '../../../types/types';
import RecipeInfo from '../../../components/RecipeInfo/RecipeInfo';
import { API_KEY_RECIPES, ID_RECIPES } from '../../../constants/foodApi';
import styles from './RecipePage.module.scss'

const RecipePage: React.FC = () => {
    const params = useParams()
    const [recipes, setRecipes] = useState<IRecipeInfo>({})

    const [fetching, isLoading, error] = useFetching(async() => {
        const response = await RecipeService.getRecipes(`${URLS.recipe}${params.id}?type=public&app_id=${ID_RECIPES}&app_key=${API_KEY_RECIPES}`)
        setRecipes(response.recipe)
        })

    useEffect(() => {
        fetching()
    }, [])
console.log(recipes)
    return (
        <div className={styles.recipeInfo__wrapper}>
        {error && 
        <div style={{margin:'2em'}}><h1>Error has occured. {error}</h1></div>}  
        {isLoading
            ? <Loader/>
            : <RecipeInfo
                label={recipes.label}
                image={recipes.image}
                calories={recipes.calories}
                ingredientLines={recipes.ingredientLines}
                digest={recipes.digest}
                dietLabels={recipes.dietLabels}
                healthLabels={recipes.healthLabels}
                cuisineType={recipes.cuisineType}
                mealType={recipes.mealType}
            />
        }
        </div>
    );
};

export default RecipePage;