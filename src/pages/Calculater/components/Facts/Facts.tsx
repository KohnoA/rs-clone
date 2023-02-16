import styles from './Facts.module.scss';
import { INutritionFactsData } from '../../../../types/types';

interface FactsProps {
  data: INutritionFactsData
}

const Facts: React.FC<FactsProps> = ({ data }) => {
  console.log(data);

  return (
    <div className={ styles.analizeData }>
      <h4 className={ styles.title }>Nutrition Facts</h4>

      <p className={ styles.serving }>Amount Per Serving</p>

      <div className={ `${styles.spaceBetween} ${styles.caloriesWrap}` }>
        <span className={ styles.calories }>Calories </span>
        <span className={ styles.calories }>{ data.calories }</span>
      </div>

      <p className={ styles.dailyValue }>% Daily Value*</p>

      <div className={ styles.spaceBetween }>
        <span><span className={ styles.highlight }>Total Fat</span> 18.3 g</span>
        <span className={ styles.highlight }>28%</span>
      </div>
      
      <p className={ styles.outro }>*Percent Daily Values are based on a 2000 calorie diet</p>
    </div> 
  );
}

export default Facts;