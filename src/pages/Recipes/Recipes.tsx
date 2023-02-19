import { IRecipes } from '../../types/types'
import RecipeList from '../../components/RecipeCard/RecipeList/RecipeList'
import { useSelector } from 'react-redux'
import { getSearchList } from '../../store/selectors/searchSelectors'

const Recipes: React.FC<IRecipes> = ({url}: IRecipes) => {
  const search = useSelector(getSearchList)

  return (
    <div className="container page">
      <h1>Recipes</h1>
           {search
            ? <RecipeList url={`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=7e3bd218&app_key=%20c984c0db6f24715dbed35ba4812c946f`}/>
            : <RecipeList url={url}/>
           }
    </div>
  )
}

export default Recipes
