import { HandleChangeInput, IText } from '../../FormTypes';

interface IProps {
  data: IText,
  state: string,
  onChange: HandleChangeInput,
}

export const FormRowText: React.FC<IProps> = ({onChange, state, ...props}: IProps) => {
  return (
    <div>
      <span>{props.data.span}</span>
      <input {...props.data} value={state} onChange={onChange}/>
    </div>
  );
};
