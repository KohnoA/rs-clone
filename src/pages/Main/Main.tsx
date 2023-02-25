import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './Main.module.scss';

const Main: React.FC = () => {

  return (
    <div className='container page'>
      <h3 className={ styles.title }>Dishes of the day</h3>

      <Swiper
        modules={[ Navigation, Pagination, Scrollbar, A11y ]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id atque necessitatibus eligendi maiores ipsa sunt dolorem. Deserunt reprehenderit asperiores provident ratione, eos mollitia, perferendis error numquam quas officia expedita minima odit architecto quo sunt magni dolorum et autem quod dignissimos!</p>
            <button>Button</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, obcaecati.</p>
            <button>Button</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, obcaecati.</p>
            <button>Button</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, obcaecati.</p>
            <button>Button</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, obcaecati.</p>
            <button>Button</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Main
