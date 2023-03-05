import styles from '../CaloriesRation.module.scss';

interface IProps {
  stateFn: React.Dispatch<React.SetStateAction<boolean>>,
  state: boolean,
  type: string,
}

export const CaloriesCategoryTitle: React.FC<IProps> = ({stateFn, state, type}: IProps) => {
  return (
    <div className={styles['calculator-sidebar-section-label']} onClick={() => stateFn(!state)}>
      <h3 className={styles['calculator-sidebar-section-label__title']}>{type}</h3>
      <span className={styles['calculator-sidebar-section-label__plus']}>+</span>
  </div>
  );
};
