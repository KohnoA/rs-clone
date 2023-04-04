import styles from './Facts.module.scss';
import { INutritionFactsData, ITotalNutrientsItem } from '../../../../types/types';
import React from 'react';

interface FactsProps {
  data: INutritionFactsData
}

const Facts: React.FC<FactsProps> = ({ data }) => {
  const {calories, totalNutrients, totalDaily} = data;

  const setNutritionInfo = (nutritionItem: ITotalNutrientsItem, isPercentage = false) => {
    if (!nutritionItem) return '-';
    
    const quantity = isPercentage ? Math.round(nutritionItem.quantity) : nutritionItem.quantity.toFixed(1);
    const unit = nutritionItem.unit;

    return isPercentage ? `${quantity}${unit}` : `${quantity} ${unit}`;
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
          <b>Total Fat: </b> 
          { setNutritionInfo(totalNutrients?.FAT) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.FAT, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Saturated Fat: { setNutritionInfo(totalNutrients?.FASAT) }</span>
        <b>{ setNutritionInfo(totalDaily?.FASAT, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Trans Fat: { setNutritionInfo(totalNutrients?.FATRN) }</span>
        <b>{ setNutritionInfo(totalDaily?.FATRN, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Cholesterol: </b>
          { setNutritionInfo(totalNutrients?.CHOLE) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.CHOLE, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Sodium: </b>
          { setNutritionInfo(totalNutrients?.NA) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.NA, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Carbohydrate: </b>
          { setNutritionInfo(totalNutrients?.CHOCDF) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.CHOCDF, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Dietary Fiber: { setNutritionInfo(totalNutrients?.FIBTG) }</span>
        <b>{ setNutritionInfo(totalDaily?.FIBTG, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Total Sugars: { setNutritionInfo(totalNutrients?.SUGAR) }</span>
        <b>{ setNutritionInfo(totalDaily?.SUGAR, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem} ${styles.infoItemNest}` }>
        <span>Includes - Added Sugars</span>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>
          <b>Protein: </b>
          { setNutritionInfo(totalNutrients?.PROCNT) }
        </span>
        <b>{ setNutritionInfo(totalDaily?.PROCNT, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Vitamin D: { setNutritionInfo(totalNutrients?.VITD) }</span>
        <b>{ setNutritionInfo(totalDaily?.VITD, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Calcium D: { setNutritionInfo(totalNutrients?.CA) }</span>
        <b>{ setNutritionInfo(totalDaily?.CA, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Iron: { setNutritionInfo(totalNutrients?.FE) }</span>
        <b>{ setNutritionInfo(totalDaily?.FE, true) }</b>
      </div>

      <div className={ `${styles.spaceBetween} ${styles.infoItem}` }>
        <span>Potassium: { setNutritionInfo(totalNutrients?.K) }</span>
        <b>{ setNutritionInfo(totalDaily?.K, true) }</b>
      </div>

      <p className={ styles.outro }>*Percent Daily Values are based on a 2000 calorie diet</p>
    </div> 
  );
}

export default React.memo(Facts);