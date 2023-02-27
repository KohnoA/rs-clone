import { initialCalories } from '../../../constants/constants';
import { IRecipe } from '../../../models/IRecipes';
import { ILifeChange } from '../../../types/types';
import { Title } from '../../Title/title';
import { FormButton } from '../CaloriesForm/FormItems/FormButton';
import styles from './CaloriesRation.module.scss';
import { amountCommonCalories, CALORIES_TO_NUTRIENTS } from '../ConstantsForm';
import { CaloriesTable } from './CaloriesRationItems/CaloriesTable';
import { useState } from 'react';
import { CaloriesAside } from './CaloriesRationItems/CaloriesAside';

interface IProps {
  calories: number,
  setCalories: React.Dispatch<React.SetStateAction<number>>,
  chooseNutrients: ILifeChange,
}

export const CaloriesRation: React.FC<IProps> = ({calories, setCalories, chooseNutrients}: IProps) => {
  const currentRolls = Math.ceil(chooseNutrients.rolls * calories / CALORIES_TO_NUTRIENTS.rolls);
  const currentFats = Math.ceil(chooseNutrients.fats * calories / CALORIES_TO_NUTRIENTS.fats);
  const remainingCalories = ((currentFats * CALORIES_TO_NUTRIENTS.fats) + (currentRolls * CALORIES_TO_NUTRIENTS.rolls));
  const currentCarbohydrates = Math.floor((calories - remainingCalories) / CALORIES_TO_NUTRIENTS.carbohydrates);

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  return (
    <>
      <Title text='Cуточная норма калорий'/>
      <div className={styles['calculator-sidebar-container']}>
        <div className={styles['calculator-sidebar']}>
          <CaloriesAside recipes={recipes} calories={calories} setRecipes={setRecipes} />
        </div>
        <CaloriesTable
            calories={calories}
            rolls={currentRolls}
            fats={currentFats}
            carbohydrates={currentCarbohydrates}
            recipes={recipes}
          />
      </div>
        <FormButton text='пересчитать' onClick={() => setCalories(initialCalories)}/>
    </>
  );
};
