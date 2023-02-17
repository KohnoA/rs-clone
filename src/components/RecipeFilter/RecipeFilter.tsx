import { RecipeFiltersData } from '../../constants';
import FilterItem from './FilterItem/FilterItem';
import styles from './RecipeFilter.module.scss'

const RecipeFilter: React.FC = () => {
    return (
        <div className={styles.filter}>
                  <h2 className={styles.filter__header}>Category</h2>
                  <ul className={styles.filterList}> 
                  {RecipeFiltersData.map((filter, i) => 
                        <FilterItem
                        key={i}
                        id={i}
                        query={filter.query}
                         header={filter.header}
                         item1={filter.items.item1}
                         item2={filter.items.item2}
                         item3={filter.items.item3}
                         item4={filter.items.item4}
                         item5={filter.items.item5}
                         item6={filter.items.item6}
                         />
                  )}
                  </ul>
            </div>
    );
};

export default RecipeFilter;
