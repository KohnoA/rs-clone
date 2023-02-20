/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IRecipeInfo } from '../../types/types';
import FavouriteBtn from '../Favourite/FavoriteBtn/FavoriteBtn';
import LazyLoader from '../Loader/LazyLoader/LazyLoader';
import styles from './RecipeInfo.module.scss'

const RecipeInfo: React.FC<IRecipeInfo> = ({...props}: IRecipeInfo) => {

    return (
        <div className={styles.recipeInfo}>
            <div className={styles.recipeInfoPart}>
            <div className={styles.recipeInfo__headerWrapper}>
               <div className={styles.favMainWrapper}>
                 <h1 className={styles.recipeInfo__header}>{props.label}</h1>
                <FavouriteBtn cardId={props.id!}/>
               </div>
            <div>
                <LazyLoader className={styles.recipeImg} src={props.image} alt='recipe image' />
                <ul  className={`${styles.typesWrapper} ${styles.typesWrapper__main}`}>
                    {props.digest?.map((digest, i) =>{
                        if(i < 3) {
                     return <li key={i}>
                        <span className={styles.nutrient__header}>{digest.label} </span>
                        <span className={styles.nutrient__total}>{digest.total.toFixed(2)} </span>
                        <span>{digest.unit}</span>
                    </li>
                    }})}
                </ul>
            </div>
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
                <h3>Cuisine</h3>
                    <ul>
                        {props.cuisineType?.map((cuisine, i) => <li className={styles.mainInfo__item} key={i}>{cuisine}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Meal type</h3>
                    <ul>
                        {props.mealType?.map((type, i) => <li className={styles.mainInfo__item} key={i}>{type}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3>Diet labels</h3>
                    <ul>
                        {props.dietLabels?.length !== 0
                            ? props.dietLabels?.map((diet, i) => <li className={styles.mainInfo__item} key={i}>{diet}</li>)
                            : <li className={styles.mainInfo__item}>{'No diets there'}</li>}
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
                    <div className={styles.nutrient__wrapper}>
                        <h1>Other:</h1>
                        <div className={styles.nutrient__info}>
                <div className={styles.labels}>
                    <h3>Health labels</h3>
                    <ul className={styles.healthWrapper}>
                        {props.healthLabels?.map((health, i) => <li className={styles.health__item} key={i}>{health}</li>)}
                    </ul>
                </div>
            <div className={styles.labels}>
                <h3>Nutrients</h3>
                <ul>
                <li><span className={styles.nutrient__header}>Calories</span> <span className={styles.nutrient__total}>{(props.calories)?.toFixed(2)}</span> kcal</li>
                    {props.digest?.map((elem, i) =>{
                    if(i > 3) {
                        return (
                    <li className={styles.nutrient__item} key={i}>
                        <span className={styles.nutrient__header}>{elem.label} </span>
                        <span className={styles.nutrient__total}>{(elem.total).toFixed(2)}</span>
                        <span> {elem.unit} </span>
                    </li>)
                }
                })}
            </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default RecipeInfo;
