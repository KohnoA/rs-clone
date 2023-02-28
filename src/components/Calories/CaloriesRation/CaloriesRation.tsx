import { initialCalories } from '../../../constants/constants';
import { IRecipe } from '../../../models/IRecipes';
import { ILifeChange } from '../../../types/types';
import { Title } from '../../title/title';
import styles from './CaloriesRation.module.scss';
import { useState } from 'react';
import { CaloriesAside } from './CaloriesRationItems/CaloriesAside';
import { CALORIES_TO_NUTRIENTS } from '../ConstantsForm';
import { CaloriesTable } from './CaloriesRationItems/CaloriesTable';
import { FormButton } from '../CaloriesForm/FormItems/FormButton';

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
