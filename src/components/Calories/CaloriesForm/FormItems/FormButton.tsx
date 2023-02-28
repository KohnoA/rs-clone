import { RemoveOrCountState } from '../../FormTypes';
import style from '../CaloriesForm.module.scss';

interface IProps {
  text: string,
  onClick: RemoveOrCountState,
}

export const FormButton: React.FC<IProps> = ({text, onClick}: IProps) => {
  return (
    <button className={style['calories-form__button']} onClick={onClick}>
      {text}
    </button>
  );
};
