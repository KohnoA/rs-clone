import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import RecipeService from '../../../components/API/RecipeService'
import { useFetching } from '../../../hooks/useFetching'
import Loader from '../../../components/Loader/Loader'
import { IRecipeInfo } from '../../../types/types'
import RecipeInfo from '../../../components/RecipeInfo/RecipeInfo'
import styles from './RecipePage.module.scss'
import * as API from '../../../constants/foodApi'

const RecipePage: React.FC = () => {
  const location = useParams()
  const [recipes, setRecipes] = useState<IRecipeInfo>({})

  const url = useMemo(() => {
    const params = new URLSearchParams('')
    params.set('type', API.TYPE)
    params.set('app_id', API.ID_RECIPES)
    params.set('app_key', API.API_KEY_RECIPES)

    return `${API.DOMAIN}/${API.RECIPES}/${location.id}?${String(params)}`
  }, [])

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await RecipeService.getRecipes(url)
    setRecipes(response.recipe)
  })

  useEffect(() => {
    fetching()
  }, [])

  return (
    <div className={styles.recipeInfo__wrapper}>
      {error ? (
        <div style={{ margin: '2em' }}>
          <h1 className={styles.recipesError}>Error has occured. {error}</h1>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <RecipeInfo
          id={location.id}
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
      )}
    </div>
  )
}

export default RecipePage
