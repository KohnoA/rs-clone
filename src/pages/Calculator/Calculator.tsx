import styles from './Calculator.module.scss'
import axios from 'axios'
import Button from '../../components/Button/Button'
import { useState } from 'react'
import { INutritionFactsData } from '../../types/types'
import {
  CalculatorErrorMessage,
  NUTRITION_ANALYSIS_APP_ID,
  NUTRITION_ANALYSIS_APP_KEY,
  NUTRITION_ANALYSIS_BASE_REQUEST,
} from '../../constants/constants'
import Facts from './components/Facts/Facts'
import Ingredients from './components/Ingredients/Ingredients'
import { Title } from '../../components/Title/Title'

const Calculator: React.FC = () => {
  const [info, setInfo] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<CalculatorErrorMessage>(CalculatorErrorMessage.none)
  const [nutritionFactsData, setNutritionFactsData] = useState<null | INutritionFactsData>(null)

  const analizeHandler = () => {
    if (!value) {
      setError(CalculatorErrorMessage.empty)

      return
    }

    setLoading(true)
    requestData()
  }

  const requestData = async () => {
    try {
      const { data } = await axios.post(
        `${NUTRITION_ANALYSIS_BASE_REQUEST}?app_id=${NUTRITION_ANALYSIS_APP_ID}&app_key=${NUTRITION_ANALYSIS_APP_KEY}`,
        JSON.stringify({
          title: 'recipe',
          ingr: value.split('\n').filter((item) => item),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      setNutritionFactsData(data)
      setInfo(true)
    } catch (error) {
      if (error instanceof Error) console.error(error.message)
      setError(CalculatorErrorMessage.requestError)
    } finally {
      setLoading(false)
    }
  }

  const newRecipe = () => {
    setValue('')
    setInfo(false)
  }

  return (
    <div className={`container page ${styles.calculater}`}>
      <Title text='Calculator' />
      <div className={styles.wrapper}>
        <div className={styles.description}>
          This is an IEAT-calculator. After specifying the ingredients,&nbsp; it will analyze them and show you the
          total calories, as well as other useful information.&nbsp; Enter an ingredient list list for what you are
          cooking, like&nbsp;
          <span className={styles.selectText}>&ldquo;1 cup rice, 10 oz chickpeas&ldquo;</span>, etc. Enter each
          ingredient on a new line.
        </div>

        {loading ? (
          <div className={styles.loading}></div>
        ) : (
          <div className={styles.wrapper2Columns}>
            <div className={styles.controls}>
              <p className={`${styles.error} ${error ? styles.errorShow : ''}`}>{error}</p>

              <textarea
                className={styles.textarea}
                rows={12}
                placeholder='1 cup rice...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onFocus={() => setError(CalculatorErrorMessage.none)}
              />

              {info && nutritionFactsData && <Ingredients data={nutritionFactsData} />}

              {!info && <Button additionalClasses={styles.calculator__btn} text='Analize' onClick={analizeHandler} />}
              {info && <Button additionalClasses={styles.calculator__btn} text='New recipe' onClick={newRecipe} />}
            </div>

            {info && nutritionFactsData && <Facts data={nutritionFactsData} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator
