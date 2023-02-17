import styles from './Facts.module.scss';
import { INutritionFactsData, ITotalNutrientsItem } from '../../../../types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FactsProps extends INutritionFactsData {}

const Facts: React.FC<FactsProps> = ({ calories, totalNutrients, totalDaily }) => {
  const setNutritionInfo = (nutritionItem: ITotalNutrientsItem) => {
    if (!nutritionItem) return '-';

    const quantity = Math.round(nutritionItem.quantity);
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
        <b>{ setNutritionInfo(totalDaily?.FAT) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Saturated Fat { setNutritionInfo(totalNutrients?.FASAT) }</span>
        <b>{ setNutritionInfo(totalDaily?.FASAT) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Trans Fat { setNutritionInfo(totalNutrients?.FATRN) }</span>
        <b>{ setNutritionInfo(totalDaily?.FATRN) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Cholesterol </b>
          { setNutritionInfo(totalNutrients?.CHOLE) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.CHOLE) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Sodium </b>
          { setNutritionInfo(totalNutrients?.NA) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.NA) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Total Carbohydrate </b>
          { setNutritionInfo(totalNutrients?.CHOCDF) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.CHOCDF) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Dietary Fiber { setNutritionInfo(totalNutrients?.FIBTG) }</span>
        <b>{ setNutritionInfo(totalDaily?.FIBTG) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Total Sugars { setNutritionInfo(totalNutrients?.SUGAR) }</span>
        <b>{ setNutritionInfo(totalDaily?.SUGAR) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Includes - Added Sugars</span>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Protein </b>
          { setNutritionInfo(totalNutrients?.PROCNT) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.PROCNT) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Vitamin D { setNutritionInfo(totalNutrients?.VITD) }</span>
        <b>{ setNutritionInfo(totalDaily?.VITD) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Calcium D { setNutritionInfo(totalNutrients?.CA) }</span>
        <b>{ setNutritionInfo(totalDaily?.CA) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Iron { setNutritionInfo(totalNutrients?.FE) }</span>
        <b>{ setNutritionInfo(totalDaily?.FE) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Potassium { setNutritionInfo(totalNutrients?.K) }</span>
        <b>{ setNutritionInfo(totalDaily?.K) }</b>
      </div>

      <p className={ styles.outro }>*Percent Daily Values are based on a 2000 calorie diet</p>
    </div> 
  );
}

export default Facts;