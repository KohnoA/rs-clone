import styles from './Calculator.module.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { INutritionFactsData } from '../../types/types';
import { NUTRITION_ANALYSIS_APP_ID, NUTRITION_ANALYSIS_APP_KEY, NUTRITION_ANALYSIS_BASE_REQUEST } from '../../constants/constants';
import Facts from './components/Facts/Facts';

const Calculator: React.FC = () => {
  const [info, setInfo] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [nutritionFactsData, setNutritionFactsData] = useState<null | INutritionFactsData>(null);

  const analizeHandler = () => {
    if (!value) {
      setIsEmpty(true);
      
      return;
    }
    
    setLoading(true);
    requestData();
  }

  const requestData = async () => {
    try {
      const {data} = await axios.post(
        `${NUTRITION_ANALYSIS_BASE_REQUEST}?app_id=${NUTRITION_ANALYSIS_APP_ID}&app_key=${NUTRITION_ANALYSIS_APP_KEY}`, 
        JSON.stringify({
          title: 'recipe',
          ingr: value.split('\n')
        }), 
        { 
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      setNutritionFactsData(data);
      setInfo(true);

    } catch (error) {
      if (error instanceof Error) console.error(error.message);

    } finally {
      setLoading(false);
    }
  }

  const newRecipe = () => {
    setValue('');
    setInfo(false);
  }

  return (
    <div className={ `container page ${styles.calculater}` }>
      <h2 className={ styles.title }>Calculator</h2>

      <div className={ styles.wrapper }>
        <p className={ styles.description }>
          Enter an ingredient list list for what you are cooking, like&nbsp;
          <span className={ styles.selectText }>&ldquo;1 cup rice, 10 oz chickpeas&ldquo;</span>, 
          etc. Enter each ingredient on a new line.
        </p>

        { loading 
          ? <div className={ styles.loading }></div>
          : <div className={ styles.wrapper2Columns }>
              <div className={ styles.controls }>
                <p className={ `${styles.error} ${isEmpty ? styles.errorShow : ''}` }>
                  Please fill in the field!
                </p>

                <textarea 
                  className={ styles.textarea } 
                  rows={ 10 } 
                  placeholder='1 cup rice...'
                  value={ value }
                  onChange={ (event) => setValue(event.target.value) }
                  onFocus={ () => setIsEmpty(false) }
                />

                { !info && <Button text='Analize' onClick={ analizeHandler } /> }
                { info && <Button text='New recipe' onClick={ newRecipe } /> }
              </div>

              { (info && nutritionFactsData) && <Facts data={ nutritionFactsData } /> }
            </div>
        }
      </div>
    </div>
  )
}

export default Calculator;