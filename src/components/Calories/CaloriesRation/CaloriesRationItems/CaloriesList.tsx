import { IRecipe } from '../../../../models/IRecipes';
import { CaloriesListItem } from './CaloriesListItem';
import styles from '../CaloriesRation.module.scss';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface IProps {
  loading: boolean,
  error: FetchBaseQueryError | undefined,
  recipes: IRecipe[],
}

export const CaloriesList: React.FC<IProps> = ({loading, error, recipes}) => {
  return (
    <ul className={styles['calculator-sidebar-section-list']}>
      {loading && <div className={styles.loading}></div>}
      {error && <span>Error: {(error as FetchBaseQueryError).status}, </span>}
      <CaloriesListItem recipes={recipes} />
    </ul>
  );
};
