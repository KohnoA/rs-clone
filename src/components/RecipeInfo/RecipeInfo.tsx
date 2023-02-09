import { IRecipeInfo } from '../../types/types';


const RecipeInfo: React.FC<IRecipeInfo> = ({...props}: IRecipeInfo) => {
    return (
        <div>
            {props.calories}
        </div>
    );
};

export default RecipeInfo;