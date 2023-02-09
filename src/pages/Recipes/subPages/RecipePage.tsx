import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeService from '../../../components/API/RecipeService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../../../components/Loader/Loader';
import { URLS } from '../../../constants';
import { IRecipesData } from '../../../types/types';

const RecipePage: React.FC = () => {
    const params = useParams()
    const [recipes, setRecipes] = useState<IRecipesData[]>([])

    const [fetching, isLoading, error] = useFetching(async() => {
        const response = await RecipeService.getRecipes(`${URLS.recipe}${params.id}`)
        setRecipes(response.hits)
    })

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div>
        {isLoading
            ? <Loader/>
            :   <div><h1>Вы перешли на страницу с ID = {} </h1>
                {/* <h3>{recipes.map((recipe, i) => <RecipeInfo key={i} calories={+recipe.recipe.calories}/>)}</h3> */}
                </div>            
        }
        </div>
    );
};

export default RecipePage;