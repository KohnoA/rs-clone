import { HandleChangeSelect } from '../../FormTypes';
import { SELECT_OPTIONS } from '../../ConstantsForm';

interface IProps {
  span: string,
  name: string,
  state: number,
  onChange: HandleChangeSelect,
}

export const FormRowSelect: React.FC<IProps> = ({span, name, state, onChange}: IProps) => {
  return (
    <div>
      <span>{span}</span>
      <select name={name} onChange={onChange}>
        {SELECT_OPTIONS.map((select, i) => {
          const isSelected = state === i ? true : false;
          const isDisabled = i === 0 ? true : false;
          return <option disabled={isDisabled} selected={isSelected} key={i}>{select}</option>
        })}
      </select>
    </div>
  );
};
