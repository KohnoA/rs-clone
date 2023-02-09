import FilterComponent from './FilterItem/FilterItem';
import styles from './RecipeFilter.module.scss'

const RecipeFilter: React.FC = () => {
    return (
        <div className={styles.filter}>
                  <h2 className={styles.filter__header}>Category</h2>
                  <ul className={styles.filterList}> 
                  <FilterComponent
                        id={0}
                        query={'diet'}
                         header={'Diet'}
                         item1={'balanced'}
                         item2={'high-fiber'}
                         item3={'high-protein'}
                         item4={'low-carb'}
                         item5={'low-fat'}
                         item6={'low-sodium'}
                        />
                  <FilterComponent
                        id={1}
                        query={'health'}
                         header={'Health'}
                         item1={'vegetarian'}
                         item2={'alcohol-free'}
                         item3={'vegan'}
                         item4={'pork-free'}
                         item5={'gluten-free'}
                         item6={'fish-free'}
                        />
                  <FilterComponent
                        id={2}
                        query={'mealType'}
                         header={'Meal type'}
                         item1={'breakfast'}
                         item2={'lunch'}
                         item3={'dinner'}
                         item4={'snack'}
                         item5={'tea-time'}
                        />
                  <FilterComponent
                        id={3}
                        query={'cuisineType'}
                         header={'Cuisune'}
                         item1={'American'}
                         item2={'Asian'}
                         item3={'French'}
                         item4={'Italian'}
                         item5={'Mexican'}
                        />
                  </ul>
            </div>
    );
};

export default RecipeFilter;
