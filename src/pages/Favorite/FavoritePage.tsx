import { useSelector } from 'react-redux'
import FavoriteList from '../../components/Favourite/FavoriteList/FavoriteList'
import { getFavoriteList } from '../../store/selectors/favoriteSelectors'
import styles from './FavoritePage.module.scss'
import { useState, useCallback } from 'react'

const FavoritePage: React.FC = () => {
  const favArr = useSelector(getFavoriteList)
  const [error, setError] = useState(false)

  const fillError = useCallback(
    (hasError: boolean) => {
      if (!error) {
        setError(hasError)
      }
    },
    [error],
  )

  if (error) {
    return (
      <h2>Error has occured. Network Error. Maybe it`s too many requests. Please, try later.</h2>
    )
  }

  return (
    <>
      {favArr.map((id) => (
        <FavoriteList key={id} id={id} setError={fillError} />
      ))}
    </>
  )
}

const FavoritePageWrapper = () => {
  const favArr = useSelector(getFavoriteList)

  return (
    <div className={styles.favoritePage}>
      <h1>Favorite recipes</h1>
      <div
        className={
          favArr.length === 0 ? styles.favoritePage__wrapper_empty : styles.favoritePage__wrapper
        }
      >
        <FavoritePage />
      </div>
    </div>
  )
}

export default FavoritePageWrapper
