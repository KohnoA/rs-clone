import { HandleChangeInput, IText } from '../../FormTypes';
import style from '../CaloriesForm.module.scss';

interface IProps {
  data: IText,
  state: string,
  onChange: HandleChangeInput,
}

export const FormRowText: React.FC<IProps> = ({onChange, state, ...props}: IProps) => {
  return (
    <div className={style['calories-form-row_text']}>
      <span className={style['calories-form-row_text__span']}>{props.data.span}</span>
      <input className={style['calories-form-row_text__input']} {...props.data} value={state} onChange={onChange}/>
    </div>
  );
};
