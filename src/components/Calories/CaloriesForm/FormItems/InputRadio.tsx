import { HandleChangeInput } from '../../FormTypes';
import style from '../CaloriesForm.module.scss';

interface IProps {
  value: string,
  name: string,
  text: string,
  state: string,
  onChange: HandleChangeInput,
}

export const InputRadio: React.FC<IProps> = ({text, state, onChange, ...props}: IProps) => {
  const isCheck = state === props.value ? true : false;
  return (
    <label className={style['calories-form-row-labels__label']}>
      <input type='radio' {...props} checked={isCheck} onChange={onChange}/>
      {text}
    </label>
  );
};
