import { useNavigate } from 'react-router-dom';
import { IRecipe } from '../../../../models/IRecipes';
import { currentId } from '../../../../utils/utils';
import styles from '../CaloriesRation.module.scss';

interface IProps {
  recipes: IRecipe[],
}

export const CaloriesListItem: React.FC<IProps> = ({recipes}) => {
  const router = useNavigate();

  return (
    <>
      {recipes && recipes.map((recipe, i) => {
        const id = currentId(recipe);
        return (
          <li
            className={styles['calculator-sidebar-section-list__item']}
            key={i}
            onClick={() => router(`/recipes/${id}`)}
            id={id}
          >
            {recipe.recipe.label}
          </li>);
      })}
    </>
  );
};
