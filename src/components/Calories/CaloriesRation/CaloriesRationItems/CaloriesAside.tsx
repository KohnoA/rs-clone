import { IRecipe } from '../../../../models/IRecipes';
import { getCurrentCaloriesOfMilType, MIL_TIPE } from '../../ConstantsForm';
import { CaloriesCategory } from './CaloriesCategory';

interface IProps {
  recipes: IRecipe[],
  calories: number,
  setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>,
}

export const CaloriesAside: React.FC<IProps> = ({calories, recipes, setRecipes}) => {
  return (
    <>
      {MIL_TIPE.map((type, i) => {
        const currentCalories = getCurrentCaloriesOfMilType(calories, type);
        return <CaloriesCategory
          type={type}
          key={i}
          currentCalories={currentCalories}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      })}
    </>
  );
};
