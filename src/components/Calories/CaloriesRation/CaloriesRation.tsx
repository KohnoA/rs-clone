import { initialCalories } from '../../../constants/constants';
import { FormButton } from '../CaloriesForm/FormItems/FormButton';


interface IProps {
  state: number,
  stateFn: React.Dispatch<React.SetStateAction<number>>,
}

export const CaloriesRation: React.FC<IProps> = ({state, stateFn}: IProps) => {
  return (
    <div>
      Cуточная норма калорий {state}
      <FormButton text='пересчитать' onClick={() => stateFn(initialCalories)}/>
    </div>
  );
};
