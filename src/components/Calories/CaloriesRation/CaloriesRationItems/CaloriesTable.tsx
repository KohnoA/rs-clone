import { useEffect, useState } from 'react';
import { IRecipe } from '../../../../models/IRecipes';
import { amountCommonCalories } from '../../ConstantsForm';
import styles from '../CaloriesRation.module.scss';

interface IProps {
  calories: number,
  rolls: number,
  fats: number,
  carbohydrates: number,
  recipes: IRecipe[],
}

export const CaloriesTable: React.FC<IProps> = ({calories, rolls, fats, carbohydrates, recipes}) => {
  const [countingCarbs, setCountingCarbs] = useState<number>(0);
  const [countingFat, setCountingFat] = useState<number>(0);
  const [countingProtein, setCountingProtein] = useState<number>(0);
  const [countingEnergy, setCountingEnergy] = useState<number>(0);

  const changeTableNutrients = () => {
    const commonNutrients = amountCommonCalories(recipes);
    commonNutrients === undefined ? setCountingCarbs(0) : setCountingCarbs(commonNutrients.Carbs | 0);
    commonNutrients === undefined ? setCountingFat(0) : setCountingFat(commonNutrients.Fat | 0);
    commonNutrients === undefined ? setCountingProtein(0) : setCountingProtein(commonNutrients.Protein | 0);
    commonNutrients === undefined ? setCountingEnergy(0) : setCountingEnergy(commonNutrients.Energy | 0);
  };

  const result = {
    calories: calories - countingEnergy | 0,
    carbs: rolls - countingCarbs | 0,
    fats: fats - countingFat | 0,
    protein: carbohydrates - countingProtein | 0,
  }

  useEffect(() => {
    changeTableNutrients();
  }, [recipes]);

  return (
    <table className={styles['calculator__table']}>
      <thead>
        <tr>
          <td></td>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Fats</td>
          <td>Carbohydrates</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Goal for the day</td>
          <td>{calories}</td>
          <td>{rolls}</td>
          <td>{fats}</td>
          <td>{carbohydrates}</td>
        </tr>
        <tr>
          <td>Consumed</td>
          <td>{countingEnergy}</td>
          <td>{countingCarbs}</td>
          <td>{countingFat}</td>
          <td>{countingProtein}</td>
        </tr>
        <tr>
          <td>Left</td>
          <td>{result.calories}</td>
          <td>{result.carbs}</td>
          <td>{result.fats}</td>
          <td>{result.protein}</td>
        </tr>
      </tbody>
    </table>
  );
};
