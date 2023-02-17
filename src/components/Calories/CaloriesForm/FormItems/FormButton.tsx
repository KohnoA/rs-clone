import { RemoveOrCountState } from '../../FormTypes';

interface IProps {
  text: string,
  onClick: RemoveOrCountState,
}

export const FormButton: React.FC<IProps> = ({text, onClick}: IProps) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};
