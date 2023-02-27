/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useSelector } from 'react-redux'
import FavoriteList from '../../components/Favourite/FavoriteList/FavoriteList'
import { getFavoriteList } from '../../store/selectors/favoriteSelectors'
import styles from './FavoritePage.module.scss'
import Loader from '../../components/Loader/Loader'
import { useFetchFavoriteRecipesQuery } from '../../sevices/foodService.api'

const FavoritePage: React.FC = () => {
  const favArr = useSelector(getFavoriteList)

  const arrParams = favArr.map((id) => {
    const { data, isLoading, error } = useFetchFavoriteRecipesQuery(id)
    return { data, isLoading, error }
  })

  arrParams.forEach((item, i) => {
    if (item.data == undefined) {
      arrParams.splice(i, 1)
    }
  })

  console.log(arrParams)

  return (
    <div className={styles.favoritePage}>
      <h1>Favorite recipes</h1>

      <div
        className={
          favArr.length === 0 ||
          arrParams[0].error ||
          arrParams[0].isLoading ||
          arrParams.map((item) => item.data === undefined)
            ? styles.favoritePage__wrapper_empty
            : styles.favoritePage__wrapper
        }
      >
        {arrParams[0].error ? (
          <div>
            <h1>
              Error has occured. Network Error. Maybe it`s too many requests. Please, try later.
            </h1>
          </div>
        ) : arrParams[0].isLoading ? (
          <Loader />
        ) : favArr.length === 0 ? (
          <h1>There is no favorite recipes yet.</h1>
        ) : (
          arrParams.map((item, i) => (
            <FavoriteList key={item.data!.recipe.uri} recipe={item.data!.recipe} id={favArr[i]} />
          ))
        )}
      </div>
    </div>
  )
}

export default FavoritePage
