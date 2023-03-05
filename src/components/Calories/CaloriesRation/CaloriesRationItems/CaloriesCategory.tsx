import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { IRecipe } from '../../../../models/IRecipes';
import styles from '../CaloriesRation.module.scss';
import { ButtonsToggle } from './ButtonsToggle';
import { CaloriesCategoryTitle } from './CaloriesTitle';
import { CaloriesList } from './CaloriesList';

interface IProps {
  type: string,
  currentCalories: string,
  recipes: IRecipe[],
  setRecipes: Dispatch<SetStateAction<IRecipe[]>>,
}

export const CaloriesCategory: React.FC<IProps> = ({type, currentCalories, recipes, setRecipes}: IProps) => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchBaseQueryError | undefined>();
  const [myRecipes, setMyRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    myRecipes.length ? setRecipes([...recipes, myRecipes[myRecipes.length - 1]]) : setRecipes([]);
  }, [myRecipes]);

  return (
    <div className={styles['calculator-sidebar-section']}>
      <CaloriesCategoryTitle type={type} state={toggle} stateFn={setToggle} />
      {toggle && <ButtonsToggle
                    type={type}
                    currentCalories={currentCalories}
                    recipes={myRecipes}
                    setMyRecipes={setMyRecipes}
                    setLoading={setLoading}
                    setError={setError}
                 />}
     <CaloriesList loading={loading} error={error} recipes={myRecipes} />
    </div>
  );
};
