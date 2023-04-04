import { HandleChangeInput, IGender, IGoal } from '../../FormTypes';
import { InputRadio } from './InputRadio';
import style from '../CaloriesForm.module.scss';

interface IProps {
  span: string,
  state: string,
  genders?: IGender[],
  goals?: IGoal[],
  onChange: HandleChangeInput,
}

export const FormRowRadio: React.FC<IProps> = ({ span, genders, goals, onChange, ...props }: IProps) => {
  return (
    <div className={style['calories-form-row']}>
      <span>{span}</span>
      <div className={style['calories-form-row-labels']}>
        {genders && genders.map((gender, i) => {
          return <InputRadio
            key={i}
            name={gender.name}
            value={gender.value}
            text={gender.text}
            {...props}
            onChange={onChange}
          />
        })}
        {goals && goals.map((goal, i) => {
          return <InputRadio
            key={i}
            name={goal.name}
            value={goal.value}
            text={goal.text}
            {...props}
            onChange={onChange}
            />
        })}
      </div>
    </div>
  );
};
