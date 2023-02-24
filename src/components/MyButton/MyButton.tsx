
interface IProps {
  text: string,
}

export const MyButton: React.FC<IProps> = ({text}) => {
  return (
    <button>{text}</button>
  );
};
