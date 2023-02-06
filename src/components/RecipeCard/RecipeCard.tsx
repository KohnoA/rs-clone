import styles from './RecipeCard.module.scss'

interface IRecipeCard {
    id: string;
    header: string;
    title: string;
    image: string;
    type: string;
    typeIcon: string;
    kcalIcon: string;
    kcal: number;
}

const RecipeCard: React.FC<IRecipeCard> = ({id, header, title, image, type = 'happy meal', typeIcon, kcalIcon, kcal}: IRecipeCard) => {
  
    return (
        <div id={id} className={styles.card}>
            <h3 className={styles.card__header}>{header}</h3>
                <img className={styles.card__img} src={image} alt='recipe image'/>
                <div className={styles.cardParams__wrapper}>
                    <div className={styles.cardParams__item}>
                    <img className={styles.cardParams__img} src={typeIcon} />
                    {type}</div>
                    <div className={styles.cardParams__item}>
                    <img className={styles.cardParams__img} src={kcalIcon} alt="kcal icon" />
                    {kcal}</div>
                </div>
                <p className={styles.card__content}>{title}</p>
        </div>
    );
};

export default RecipeCard;
