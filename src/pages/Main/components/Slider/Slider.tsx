import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import RecipeCard from '../../../../components/RecipeCard/RecipeCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from './Slider.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.carusel_wrapper}>
      <Swiper
        className={styles.carusel}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        loop
      >
        {new Array(10).fill('Button').map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <RecipeCard />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className={`button-prev-slide ${styles.prev_slide}`}></div>
      <div className={`button-next-slide ${styles.next_slide}`}></div>
    </div>
  )
}

export default Slider
