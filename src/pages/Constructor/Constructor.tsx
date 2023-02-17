import { CaloriesForm } from '../../components/Calories/CaloriesForm/CaloriesForm';
import { CaloriesRation } from '../../components/Calories/CaloriesRation/CaloriesRation';
import { initialCalories } from '../../constants/constants';
import { useStateCustom } from '../../utils/utils';

const Constructor: React.FC = () => {
  const [calories, setCalories] = useStateCustom<number>('calories', initialCalories);

  return (
    <div className='container page'>
      { calories ? <CaloriesRation state={calories} stateFn={setCalories}/> : <CaloriesForm stateFn={setCalories}/> }
    </div>
  )
}

export default Constructor;
