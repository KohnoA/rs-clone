import { useState, useEffect } from 'react';
import { RecipeFiltersData } from '../../constants';
import Button from '../Button/Button';
import FilterItem from './FilterItem/FilterItem';
import styles from './RecipeFilter.module.scss'

const RecipeFilter: React.FC = () => {
  const [slide, setSlide] = useState(0)

  const upFilter = () => {
     if(slide <= 0) {
      return
    }

    const item = document.getElementById(`${slide - 1}`) as HTMLDivElement
    item.style.opacity = '1'
  }
  const downFilter = () => {
    if(slide >= RecipeFiltersData.length - 1) {
      return
  }

    const item = document.getElementById(`${slide + 1}`) as HTMLDivElement
    item.style.opacity = '1'
  }

  const upSlide = () => {
    if(slide <= 0) {
        return
    }
    setSlide(slide - 1)
    setTimeout(() => upFilter(), 100)
  }
  const downSlide = () => {
    if(slide >= RecipeFiltersData.length - 1) {
        return
    }
    setSlide(slide + 1)
    setTimeout(() => downFilter(), 100)
  }

  useEffect(() => {
    const item = document.getElementById(`${slide}`) as HTMLDivElement
    item.style.opacity = '1'
  }, [])

    return (
        <div className={styles.filter}>
            <div className={styles.header__wrapper}>
              <h2 className={styles.filter__header}>Category</h2>
              <div className={styles.navBtn__wrapper}>
                <Button
                  text='↑'
                  additionalClasses={`${styles.sliderBtn} ${slide === 0 ? styles.sliderBtn_last : ''}`}
                  onClick={upSlide}
                />
                <Button
                  text='↓'
                  additionalClasses={`${styles.sliderBtn} ${slide === RecipeFiltersData.length - 1 ? styles.sliderBtn_last : ''}`}
                  onClick={downSlide}
                />
              </div>
            </div>
              <ul className={styles.filterList}>
                <FilterItem
                  key={slide}
                  id={slide}
                  query={RecipeFiltersData[slide].query}
                   header={RecipeFiltersData[slide].header}
                   item1={RecipeFiltersData[slide].items.item1}
                   item2={RecipeFiltersData[slide].items.item2}
                   item3={RecipeFiltersData[slide].items.item3}
                   item4={RecipeFiltersData[slide].items.item4}
                   item5={RecipeFiltersData[slide].items.item5}
                   item6={RecipeFiltersData[slide].items.item6}
                   />
                 </ul>

                  </div>
    );
};

export default RecipeFilter;
