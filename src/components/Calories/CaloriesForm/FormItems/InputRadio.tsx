import { HandleChangeInput } from '../../FormTypes';

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
    <label>
      <input type='radio' {...props} checked={isCheck} onChange={onChange}/>
      {text}
    </label>
  );
};
