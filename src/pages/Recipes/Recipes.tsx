import { IRecipes } from '../../types/types'
import RecipeList from '../../components/RecipeCard/RecipeList/RecipeList'

const Recipes: React.FC<IRecipes> = ({url}: IRecipes) => {
    
  return (
    <div className="container page">
      <h1>Recipes</h1>
            <RecipeList url={url}/>
    </div>
  )
}

export default Recipes


