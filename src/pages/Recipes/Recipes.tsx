import RecipeList from '../../components/RecipeCard/RecipeList/RecipeList'

const Recipes: React.FC = () => {
  return (
    <div className='container page'>
      <h1>Recipes</h1>
      <RecipeList />
    </div>
  )
}

export default Recipes
