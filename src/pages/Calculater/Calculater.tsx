import styles from './Calculater.module.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import { useState } from 'react';

const NUTRITION_ANALYSIS_APP_ID = 'app_id=c1373a30'; // env
const NUTRITION_ANALYSIS_APP_KEY = 'app_key=df20c251f90c957e7829cc43301294f5'; // env
const NUTRITION_ANALYSIS_BASE_REQUEST = 'https://api.edamam.com/api/nutrition-data';
const NUTRITION_ANALYSIS_TYPE_REQUEST = 'nutrition-type=cooking';

const Calculater: React.FC = () => {
  const [info, setInfo] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const analizeHandler = () => {
    if (!value) {
      setIsEmpty(true);

      return;
    }

    setLoading(true);
    dataRequest();
  }

  const dataRequest = async () => {
    try {
      const urlValue = encodeURI(`ingr=${value}`);
      const response = await axios.get(`${NUTRITION_ANALYSIS_BASE_REQUEST}?${NUTRITION_ANALYSIS_APP_ID}&${NUTRITION_ANALYSIS_APP_KEY}&${NUTRITION_ANALYSIS_TYPE_REQUEST}&${urlValue}`);
      const data = response.data;
  
      console.log(data);
      setInfo(prev => !prev);
      setLoading(false);

    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
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

                <Button text='Analize' onClick={ analizeHandler } />
              </div>

              { info && <div>Analitics data</div> }
            </div>
        }
      </div>
    </div>
  )
}

export default Calculater;