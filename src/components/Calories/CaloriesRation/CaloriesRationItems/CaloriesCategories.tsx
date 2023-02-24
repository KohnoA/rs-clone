import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRecipe } from '../../../../models/IRecipes';
import Button from '../../../Button/Button';
import styles from '../CaloriesRation.module.scss';
import { ButtonsToggle } from './ButtonsToggle';
import { CaloriesCategoryTitle } from './CaloriesCategoryTitle';

interface IProps {
  type: string,
  loading: boolean,
  recipes: IRecipe[],
}

export const CaloriesCategory: React.FC<IProps> = ({type, recipes, loading}: IProps) => {
  const [toggle, setToggle] = useState(false);
  const router = useNavigate();

  const currentId = (recipe: IRecipe): string => {
    const mainLink = recipe.recipe.uri;
    const url = mainLink.slice(mainLink.indexOf('_') + 1);
    return(url);
  }

  return (
    <div className={styles['calculator-sidebar-section']}>
      <CaloriesCategoryTitle type={type} state={toggle} stateFn={setToggle} />
      {toggle && <ButtonsToggle/>}
      <ul className={styles['calculator-sidebar-section-list']}>
        {loading && <div className={styles.loading}></div>}
        {recipes && recipes.map((recipe) => {
          const id = currentId(recipe);
          const text = `${recipe.recipe.label} ${Math.ceil(recipe.recipe.calories)}`;
          return (<li
            className={styles['calculator-sidebar-section-list__item']}
            key={id}
            onClick={() => router(`/recipes/${id}`)}
            id={id}
          >
            {text}
          </li>);
        })}
      </ul>
    </div>
  );
};
