import styles from './Calculater.module.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import { useState } from 'react';

const NUTRITION_ANALYSIS_APP_ID = 'app_id=c1373a30';
const NUTRITION_ANALYSIS_APP_KEY = 'app_key=df20c251f90c957e7829cc43301294f5';
const NUTRITION_ANALYSIS_BASE_REQUEST = 'https://api.edamam.com/api/nutrition-data';
const NUTRITION_ANALYSIS_TYPE_REQUEST = 'nutrition-type=cooking';

const Calculater: React.FC = () => {
  const [info, setInfo] = useState<boolean>(false);

  const testApi = async () => {
    const response = await axios.get(`${NUTRITION_ANALYSIS_BASE_REQUEST}?${NUTRITION_ANALYSIS_APP_ID}&${NUTRITION_ANALYSIS_APP_KEY}&${NUTRITION_ANALYSIS_TYPE_REQUEST}&ingr=1%20cup%20rice`);
    const data = response.data;
    console.log(data);

    setInfo(prev => !prev);
  }

  return (
    <div
      className={ `container page ${styles.calculater}` }
    >
      <h2 className={ styles.title }>Calculater</h2>

      <div className={ styles.wrapper }>
        <p className={ styles.description }>
          Enter an ingredient list list for what you are cooking, like&nbsp;
          <span className={ styles.selectText }>&ldquo;1 cup rice, 10 oz chickpeas&ldquo;</span>, 
          etc. Enter each ingredient on a new line.
        </p>

        <div className={ styles.wrapper2Columns }>
          <div className={ styles.controls }>
            <textarea className={ styles.textarea } rows={ 10 } placeholder='1 cup rice' />

            <Button text='Analize' onClick={ testApi } />
          </div>

          { info && <div>Check</div> }
        </div>
      </div>
    </div>
  )
}

export default Calculater;