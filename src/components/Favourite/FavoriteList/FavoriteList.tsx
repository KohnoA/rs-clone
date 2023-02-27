import { IRecipesData } from '../../../types/types';
import RecipeCard from '../../RecipeCard/RecipeCard';
import iconType from '../../../assets/icons/food.svg'
import kcalIcon from '../../../assets/icons/kcal.svg'


const FavoriteList: React.FC<IRecipesData> = ({recipe, id}: IRecipesData) => {

    return (
      <>
            <RecipeCard
                route='favorite'
                key={1}
                id={id}
                header={recipe.cuisineType}
                image={recipe.image}
                type={recipe.dishType}
                typeIcon={iconType}
                kcalIcon={kcalIcon}
                kcal={Math.round(Number(recipe.calories))}
                title={recipe.label}
                  />
        </>
    );
};

 export default FavoriteList;
