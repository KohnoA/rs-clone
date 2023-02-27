import { useState } from 'react';
import { CaloriesForm } from '../../components/Calories/CaloriesForm/CaloriesForm';
import { CaloriesRation } from '../../components/Calories/CaloriesRation/CaloriesRation';
import { initialCalories } from '../../constants/constants';
import { ILifeChange } from '../../types/types';
import { useStateCustom } from '../../utils/utils';

const Constructor: React.FC = () => {
  const [calories, setCalories] = useStateCustom<number>('calories', initialCalories);
  const [nutrients, setNutrients] = useStateCustom<ILifeChange>( 'nutrients', { fats: 0, carbohydrates: 0, rolls: 0 });

  return (
    <div className='container page'>
      { calories
        ? <CaloriesRation calories={calories} setCalories={setCalories} chooseNutrients={nutrients} />
        : <CaloriesForm stateFn={setCalories} nutrientsFn={setNutrients} />
      }
    </div>
  )
}

export default Constructor;
