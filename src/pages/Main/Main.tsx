import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// import RecipeCard from '../../components/RecipeCard/RecipeCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from './Main.module.scss';

const Main: React.FC = () => {

  return (
    <div className='container page'>
      <h3 className={ styles.title }>Dishes of the day</h3>

      <div className={ styles.carusel_wrapper }>
        <Swiper
          className={ styles.carusel }
          modules={[ Navigation ]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide',
          }}
          loop
        >
          {
            new Array(10).fill('Button').map((item, index) => {
              return <SwiperSlide key={index}>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id atque necessitatibus eligendi maiores ipsa sunt dolorem. Deserunt reprehenderit asperiores provident ratione, eos mollitia, perferendis error numquam quas officia expedita minima odit architecto quo sunt magni dolorum et autem quod dignissimos!</p>
                  <button>{ item }</button>
                </div>
              </SwiperSlide>
            })
          }
          
        </Swiper>

        <div className={`button-prev-slide ${styles.prev_slide}`}></div>
        <div className={`button-next-slide ${styles.next_slide}`}></div>
      </div>
    </div>
  )
}

export default Main
