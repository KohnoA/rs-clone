import styles from './Group.module.scss'
import RecipeCard from '../../../../components/RecipeCard/RecipeCard'
import { Link } from 'react-router-dom'
import { getRecipes } from '../../../../utils/getRecipes'
import { useEffect, useState } from 'react'
import { MainRequestsQuery } from '../../../../constants/constants'
import { IRecipesData } from '../../../../types/types'
import { extractUri } from '../../../../utils/extractUri'
import iconType from '../../../../assets/icons/food.svg'
import kcalIcon from '../../../../assets/icons/kcal.svg'

interface GroupProps {
  title: string
  background: string
  linkGroup: string
  category: MainRequestsQuery
  cardCount?: number
  orientationClass?: string
}

const Group: React.FC<GroupProps> = ({ title, background, linkGroup, category, cardCount = 6, orientationClass }) => {
  const [data, setData] = useState<IRecipesData[] | null>(null)

  useEffect(() => {
    getRecipes(category, cardCount).then((res) => {
      if (res) setData(res)
    })
  }, [])

  return (
    <div className={`${styles.component} ${orientationClass ? styles[orientationClass] : ''}`}>
      <div className={`${styles.recipes} ${styles[background]}`}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.wrapper}>
          {data 
            ? data.map((recipe, index, thisArr) => (
              <RecipeCard
                route='recipes'
                key={`${index}${recipe.recipe.label}`}
                id={extractUri(index, thisArr)}
                header={recipe.recipe.cuisineType}
                image={recipe.recipe.image}
                type={recipe.recipe.dishType}
                typeIcon={iconType}
                kcalIcon={kcalIcon}
                kcal={Math.round(Number(recipe.recipe.calories))}
                title={recipe.recipe.label}
              />
            ))
            : <div className={ styles.loader }>Loading...</div>
          }
        </div>
      </div>
      <Link to={`/?mealType=${linkGroup}`} className={styles.goToButton}>
        <span className={styles.goToButtonArrow}></span>
        Show more
      </Link>
    </div>
  )
}

export default Group
