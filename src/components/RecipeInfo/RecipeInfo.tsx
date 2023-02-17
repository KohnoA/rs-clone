/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IRecipeInfo } from '../../types/types';
import FavouriteBtn from '../Favourite/FavoriteBtn/FavoriteBtn';
import LazyLoader from '../Loader/LazyLoader/LazyLoader';
import styles from './RecipeInfo.module.scss'
// import RecipeInfoItem from './RecipeInfoItem/RecipeInfoItem';


const RecipeInfo: React.FC<IRecipeInfo> = ({...props}: IRecipeInfo) => {
    return (
        <div className={styles.recipeInfo}>
            <div className={styles.recipeInfoPart}>
            <div className={styles.recipeInfo__headerWrapper}>
               <div className={styles.favMainWrapper}>
                 <h1 className={styles.recipeInfo__header}>{props.label}</h1>
                <FavouriteBtn cardId={props.id!}/>
               </div>
                {/* <img className={styles.recipeInfo__img} src={props.image} alt="recipe" /> */}
            <LazyLoader className={styles.recipeImg} src={props.image} alt='recipe image' />
            </div>
            <div className={styles.infoWrapper}>
            <div style={{width: '100%'}} className={styles.ingredients}>
            <h3 className={styles.ingredients__header}>You need:</h3>
            <ul>
                {props.ingredientLines?.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
        </div>
            <div className={styles.typesWrapper}> 
                 <div>
                    <h3>Diet labels</h3>
                    <ul>
                        {props.dietLabels?.map((diet, i) => <li key={i}>{diet}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Meal type</h3>
                    <ul>
                        {props.mealType?.map((type, i) => <li key={i}>{type}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Cuisine</h3>
                    <ul>
                        {props.cuisineType?.map((cuisine, i) => <li key={i}>{cuisine}</li>)}
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.recipeInfoPart}>
       
        
                {/* <RecipeInfoItem
                    header='Health labels'
                    response={props.healthLabels}
                    />
                <RecipeInfoItem
                    header='Diet labels'
                    response={props.dietLabels}
                    />
                <RecipeInfoItem
                    header='Meal type'
                    response={props.mealType}
                    />
                <RecipeInfoItem
                    header='Cuisine type'
                    response={props.cuisineType}
                    /> */}
                <div className={styles.labels}>
                    <h3>Health labels</h3>
                    <ul>
                        {props.healthLabels?.map((health, i) => <li key={i}>{health}</li>)}
                    </ul>
                </div>
            <div className={styles.labels}>
                <h3>Nutrients</h3>
                <ul>
                <li>Calories {(props.calories)?.toFixed(2)+' kcal'}</li>
                    {props.digest?.map((elem, i) => 
                    <li key={i}>
                        <span>{elem.label} </span>
                        <span>{(elem.total).toFixed(2)} </span>
                        <span>{elem.unit} </span>
                    </li>
                )}
            </ul>
        </div>
        </div>
        </div>
    );
};

export default RecipeInfo;