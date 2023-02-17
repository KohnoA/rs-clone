import styles from './Facts.module.scss';
import { INutritionFactsData, ITotalNutrientsItem } from '../../../../types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FactsProps extends INutritionFactsData {}

const Facts: React.FC<FactsProps> = ({ calories, totalNutrients }) => {
  console.log(calories);
  console.log(totalNutrients);

  const setNutritionInfo = (nutritionItem: ITotalNutrientsItem) => {
    if (!nutritionItem) return '-';

    const quantity = nutritionItem.quantity.toFixed(1);
    const unit = nutritionItem.unit;

    return `${quantity} ${unit}`;
  }

  return (
    <div className={ styles.analizeData }>
      <h4 className={ styles.title }>Nutrition Facts</h4>

      <p className={ styles.serving }>Amount Per Serving</p>

      <div className={ `${styles.spaceBetween} ${styles.caloriesWrap}` }>
        <span className={ styles.calories }>Calories </span>
        <span className={ styles.calories }>{ calories }</span>
      </div>

      <p className={ styles.dailyValue }>% Daily Value*</p>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Total Fat </b> 
          { setNutritionInfo(totalNutrients?.FAT) }
        </span>
        <b>28%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Saturated Fat { setNutritionInfo(totalNutrients?.FASAT) }</span>
        <b>10%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Trans Fat { setNutritionInfo(totalNutrients?.FATRN) }</span>
        <b></b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Cholesterol </b>
          { setNutritionInfo(totalNutrients?.CHOLE) }
        </span>
        <b>0%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Sodium </b>
          { setNutritionInfo(totalNutrients?.NA) }
        </span>
        <b>3%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Total Carbohydrate </b>
          { setNutritionInfo(totalNutrients?.CHOCDF) }
        </span>
        <b>111%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Dietary Fiber { setNutritionInfo(totalNutrients?.FIBTG) }</span>
        <b>138%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Total Sugars { setNutritionInfo(totalNutrients?.SUGAR) }</span>
        <b></b>
      </div>

      {/* !!!!!!!!!!!!!!!!!!! */}
      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Includes - Added Sugars</span>
        <b></b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Protein </b>
          { setNutritionInfo(totalNutrients?.PROCNT) }
        </span>
        <b>142%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Vitamin D { setNutritionInfo(totalNutrients?.VITD) }</span>
        <b>0%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Calcium D { setNutritionInfo(totalNutrients?.CA) }</span>
        <b>18%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Iron { setNutritionInfo(totalNutrients?.FE) }</span>
        <b>77%</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Potassium { setNutritionInfo(totalNutrients?.K) }</span>
        <b>47%</b>
      </div>

      <p className={ styles.outro }>*Percent Daily Values are based on a 2000 calorie diet</p>
    </div> 
  );
}

export default Facts;