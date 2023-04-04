import RecipeCard from '../../RecipeCard/RecipeCard'
import iconType from '../../../assets/icons/food.svg'
import kcalIcon from '../../../assets/icons/kcal.svg'
import { useFetchFavoriteRecipesQuery } from '../../../store/sevices/foodService.api'
import { useEffect } from 'react'
import styles from '../../RecipeCard/RecipeCard.module.scss'

interface IProps {
  id: string
  setError: (error: boolean) => void
}

const FavoriteList: React.FC<IProps> = ({ id, setError }: IProps) => {
  const { data, isError } = useFetchFavoriteRecipesQuery(id)

  useEffect(() => {
    if (isError) {
      setError(true)
    }
  }, [isError])

  if (!data) {
    return null
  }

  return (
    <RecipeCard
      additionalClass={styles.card__favorite}
      route='cabinet'
      id={id}
      header={data.recipe.cuisineType}
      image={data.recipe.image}
      type={data.recipe.dishType}
      typeIcon={iconType}
      kcalIcon={kcalIcon}
      kcal={Math.round(Number(data.recipe.calories))}
      title={data.recipe.label}
    />
  )
}

export default FavoriteList
