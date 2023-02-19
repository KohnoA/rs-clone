import { useNavigate } from 'react-router-dom';
import { IRecipe } from '../../../../models/IRecipes';
import { LiItem } from './LiItem';

interface IProps {
  type: string,
  key: number,
  recipes: IRecipe[],
}

export const CaloriesCategory: React.FC<IProps> = ({type, key, recipes}: IProps) => {
  const router = useNavigate();

  const currentId = (recipe: IRecipe): string => {
    const mainLink = recipe.recipe.uri;
    const url = mainLink.slice(mainLink.indexOf('_') + 1);
    return(url);
  }

  return (
    <li key={key}>
      {type}
      <ul>
        {recipes && recipes.map((recipe) => {
          const id = currentId(recipe);
          const text = `${recipe.recipe.label} ${Math.ceil(recipe.recipe.calories)}`;

          return <LiItem onClick={() => router(`/recipes/${id}`)} text={text} id={id} key={id}/>;
        })}
      </ul>
    </li>
  );
};
