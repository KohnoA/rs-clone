import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import RecipeCard from '../../../../components/RecipeCard/RecipeCard'
import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from './Slider.module.scss'
import { IRecipesData } from '../../../../types/types'
import { MainRequestsQuery } from '../../../../constants/constants'
import { useEffect, useState } from 'react'
import iconType from '../../../../assets/icons/food.svg'
import kcalIcon from '../../../../assets/icons/kcal.svg'
import { extractUri } from '../../../../utils/extractUri'

interface SliderProps {
  getData: (query: MainRequestsQuery, count: number) => Promise<IRecipesData[] | undefined>
}

const Slider: React.FC<SliderProps> = ({ getData }) => {
  const [data, setData] = useState<IRecipesData[] | null>(null)

  useEffect(() => {
    getData(MainRequestsQuery.balance, 10).then((res) => {
      if (res) setData(res)
    })
  }, [])

  return data ? (
    <div className={styles.carusel_wrapper}>
      <Swiper
        className={styles.carusel}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        autoplay
        loop
      >
        {data &&
          data.map((recipe, index, thisArr) => {
            return (
              <SwiperSlide key={index}>
                <RecipeCard
                  route='recipes'
                  id={extractUri(index, thisArr)}
                  header={recipe.recipe.cuisineType}
                  image={recipe.recipe.image}
                  type={recipe.recipe.dishType}
                  typeIcon={iconType}
                  kcalIcon={kcalIcon}
                  kcal={Math.round(Number(recipe.recipe.calories))}
                  title={recipe.recipe.label}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>

      <div className={`button-prev-slide ${styles.prev_slide}`}></div>
      <div className={`button-next-slide ${styles.next_slide}`}></div>
    </div>
  ) : (
    <div className={styles.loader}></div>
  )
}

export default Slider
