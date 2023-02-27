import styles from './Ingredients.module.scss';
import { INutritionFactsData } from '../../../../types/types';
import React from 'react';

interface IngredientsProps {
  data: INutritionFactsData,
}

const Ingredients: React.FC<IngredientsProps> = ({ data }) => {
  const {ingredients} = data;

  return (
    <table className={ styles.table }>
      <tbody>
        <tr>
          <th>Qty</th>
          <th>Unit</th>
          <th>Food</th>
          <th>Calories</th>
          <th>Weight</th>
        </tr>

        { ingredients.map(item => {
          return <tr key={ item.text.replace(' ', '-') }>
                  <td>{ item.parsed[0].quantity }</td>
                  <td>{ item.parsed[0].measure }</td>
                  <td>{ item.parsed[0].food }</td>
                  <td>{ item.parsed[0].nutrients.ENERC_KCAL.quantity.toFixed(0) } kcal</td>
                  <td>{ item.parsed[0].weight.toFixed(0) } g</td>
                </tr>
        }) }
      </tbody>
    </table>
  );
}

export default React.memo(Ingredients);