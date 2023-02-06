import { useEffect, useState } from 'react'
import RecipeService from '../../components/API/RecipeService'
import Loader from '../../components/Loader/Loader'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import RecipeFilter from '../../components/RecipeFilter/RecipeFilter'
import { IRecipes, IRecipesData, URLS } from '../../types/types'
import styles from './pageRecipes.module.scss'
import iconType from '../../assets/icons/mealType.svg'
import kcalIcon from '../../assets/icons/kcal.svg'
import { useFetching } from '../../components/API/useFetching'
import { useLocation, useParams } from 'react-router-dom'

interface INext {
      href: string;
}

const Recipes: React.FC<IRecipes> = ({url}: IRecipes) => {
      const [recipes, setRecipes] = useState<IRecipesData[]>([])
      const [query, setQuery] = useState<string>('')
  
      const [fetchingRecipes, isRecipesLoading, errorRecipes] = useFetching(async() => {
            const response = await RecipeService.getRecipes(`${url}&${query}`)
            setRecipes(response.hits)
        })

      //  useEffect(() => {
      //       fetchingRecipes()
      //  }, [])

      const params = useLocation();

      const fetchingRecipe = async (url: string, query: string) => {
            const response = await RecipeService.getRecipes(`${url}&${query}`)
            setRecipes(response.hits)
      }

      useEffect(() => {
            const queryStr = params.search.slice(1)
            setQuery(queryStr)
            fetchingRecipe(url, queryStr)
      }, [params, query])
    
  return (
    <div
      className="container page"
    >
      <h1>Recipes</h1>
      <div className={styles.pageRecipes}>
            <RecipeFilter/>
            {isRecipesLoading
                  ? <Loader/>
                  :<div className={styles.recipesWrapper}>
                        {recipes.map((recipe, i) => 
                              <RecipeCard  
                                    key={i}
                                    id={String(i)}
                                    header={recipe.recipe.cuisineType}
                                    image={recipe.recipe.image}
                                    type={recipe.recipe.dishType}
                                    typeIcon={iconType}
                                    kcalIcon={kcalIcon}
                                    kcal={Math.round(Number(recipe.recipe.calories))}
                                    title={recipe.recipe.label}
                              />    
            )}
      </div>
            }
      
      </div>
    </div>
  )
}

export default Recipes