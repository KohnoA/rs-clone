import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { IRecipe } from '../../../../models/IRecipes';
import { MyButton } from '../../../MyButton/MyButton';
import styles from '../CaloriesRation.module.scss';

interface IProps {
  type: string,
  currentCalories: string,
  recipes: IRecipe[],
  setMyRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<FetchBaseQueryError | undefined>>,
}

export const ButtonsToggle: React.FC<IProps> = ({type, currentCalories, recipes, setMyRecipes, setLoading, setError}) => {
  return (
    <div className={styles['calculator-sidebar-section-buttons']}>
      {/* <MyButton
        text='Добавить блюдо'
        type={type}
        calories={currentCalories}
        recipes={recipes}
        setMyRecipes={setMyRecipes}
        setLoading={setLoading}
        setError={setError}
      />
      | */}
      <MyButton
        text='Рандомное'
        type={type}
        calories={currentCalories}
        recipes={recipes}
        setMyRecipes={setMyRecipes}
        setLoading={setLoading}
        setError={setError}
      />
      {/* <MyFavoriteBtn myClass={styles['calculator-sidebar-section-buttons__favorite']}/> */}
    </div>
  );
};