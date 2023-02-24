import { MyButton } from '../../../MyButton/MyButton';
import { MyFavoriteBtn } from '../../../MyFavorite/MyFavorite';
import styles from '../CaloriesRation.module.scss';

export const ButtonsToggle = () => {
  // const getRandomRecipe = () => {

  // }

  return (
    <div className={styles['calculator-sidebar-section-buttons']}>
      <MyButton text='Добавить блюдо'/>
      |
      <MyButton text='Рандомное'/>
      <MyFavoriteBtn myClass={styles['calculator-sidebar-section-buttons__favorite']}/>
    </div>
  );
};
