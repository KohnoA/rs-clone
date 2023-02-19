
interface IProps {
  id: string,
  text: string,
  onClick: () => void;
}

export const LiItem = ({text, ...props}: IProps) => {
  return (
    <li {...props}>
      {text}
    </li>
  );
};
