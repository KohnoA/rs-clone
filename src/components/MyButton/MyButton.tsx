import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { IRecipe } from '../../models/IRecipes';
import { foodAPI } from '../../store/sevices/foodService.api';
import { checkDuplicates, getRandomInt } from '../../utils/utils';
import styles from './MyButton.module.scss';

interface IProps {
  text: string,
  type: string,
  calories: string,
  recipes: IRecipe[],
  setMyRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<FetchBaseQueryError | undefined>>,
}

export const MyButton: React.FC<IProps> = ({text, type, calories, recipes, setMyRecipes, setError}) => {
  const { data, error, refetch } = foodAPI.useFetchRecipesWithParamsRandomQuery({type, calories});

  const setRandomRecipe = () => {
    if (data) {
      getRandomRecipe();
    } else if (error) {
      setError(error as FetchBaseQueryError);
    }
  }

  async function getRandomRecipe() {
    const index = getRandomInt(1, data?.hits.length as number);
    const newRecipe = data && data.hits[index];
    if (checkDuplicates(recipes, newRecipe as IRecipe)) {
      setMyRecipes(prev => ([...prev, newRecipe as IRecipe]));
    } else {
      await refetch();
      getRandomRecipe();
    }
  }

  return (
    <button className={styles.button} onClick={setRandomRecipe}>{text}</button>
  );
};
