import { initialCalories } from '../../../constants/constants';
import { IRecipe } from '../../../models/IRecipes';
import { foodAPI, IType } from '../../../store/sevices/foodService.api';
import { ILifeChange } from '../../../types/types';
import { Title } from '../../Title/Title';
import { FormButton } from '../CaloriesForm/FormItems/FormButton';
import { CaloriesCategory } from './CaloriesRationItems/CaloriesCategories';
import styles from './CaloriesRation.module.scss';
import { getCurrentCaloriesOfMilType, MIL_TIPE } from '../ConstantsForm';

interface IProps {
  state: number,
  stateFn: React.Dispatch<React.SetStateAction<number>>,
  nutrients: ILifeChange,
}

export const CaloriesRation: React.FC<IProps> = ({state, stateFn, nutrients}: IProps) => {
  console.log(nutrients, state);
  return (
    <>
      <Title text='Cуточная норма калорий' cal={state}/>
      <div className={styles['calculator-sidebar']}>
        {
          MIL_TIPE.map((type, i) => {
            const calories = getCurrentCaloriesOfMilType(state, type);
            const { data, isLoading, error } = foodAPI.useFetchRecipesWithParamsRandomQuery({type, calories});
            const recipes = data && data.hits.slice(0, 5);
            return <CaloriesCategory type={type} key={i} loading={isLoading} recipes={recipes as IRecipe[]} />
          })
        }
      </div>
      <FormButton text='пересчитать' onClick={() => stateFn(initialCalories)}/>
    </>
  );
};
