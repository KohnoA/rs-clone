import { initialCalories } from '../../../constants/constants';
import { IRecipe } from '../../../models/IRecipes';
import { foodAPI } from '../../../sevices/foodService.api';
import { ILifeChange } from '../../../types/types';
import { Title } from '../../Title/Title';
import { FormButton } from '../CaloriesForm/FormItems/FormButton';
import { CaloriesCategory } from './CaloriesRationItems/CaloriesCategory';
interface IProps {
  state: number,
  stateFn: React.Dispatch<React.SetStateAction<number>>,
  nutrients: ILifeChange,
}

const MIL_TIPE = ['breakfast', 'lunch', 'dinner', 'snack'];

export const CaloriesRation: React.FC<IProps> = ({state, stateFn, nutrients}: IProps) => {
  console.log(nutrients)
  return (
    <>
      <Title text='Cуточная норма калорий' cal={state}/>
      <ul>
        {MIL_TIPE.map((type, i) => {
          const { data, isLoading, error } = foodAPI.useFetchRecipesWithParamsRandomQuery(type);
          const recipes = data && data.hits.slice(0, 5);
          return <CaloriesCategory type={type} key={i} recipes={recipes as IRecipe[]} />
        })}
      </ul>
      <FormButton text='пересчитать' onClick={() => stateFn(initialCalories)}/>
    </>
  );
};
