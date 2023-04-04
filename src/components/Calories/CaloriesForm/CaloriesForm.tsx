import { FormButton } from './FormItems/FormButton'
import { FormRowRadio } from './FormItems/FormRowRadio'
import {
  InitialStateText,
  HandleChangeInput,
  HandleChangeSelect,
  RemoveOrCountState,
  ICountCalories,
} from '../FormTypes'
import { FormRowSelect } from './FormItems/FormRowSelect'
import { FormRowText } from './FormItems/FormRowText'
import {
  GENDERS,
  GOALS,
  initialStateRadio,
  TEXTS,
  initialStateText,
  initialStateSelect,
  countCalories,
  KFA,
  countNutrientsPercent,
  PARAGRAPH_TEXT,
} from '../ConstantsForm'
import { useStateCustom } from '../../../utils/utils'
import { Title } from '../../Title/Title'
import { ILifeChange } from '../../../types/types'
import style from './CaloriesForm.module.scss'

interface IProps {
  stateFn: React.Dispatch<React.SetStateAction<number>>
  nutrientsFn: React.Dispatch<React.SetStateAction<ILifeChange>>
}

export const CaloriesForm: React.FC<IProps> = ({ stateFn, nutrientsFn }: IProps) => {
  const [radioInfo, setRadioInfo] = useStateCustom('radioInfo', initialStateRadio)
  const [textInfo, setTextInfo] = useStateCustom('textInfo', initialStateText)
  const [selectInfo, setSelectInfo] = useStateCustom('selectInfo', initialStateSelect)

  const handleChangeRadio: HandleChangeInput = (e) => {
    const target = e.target
    setRadioInfo((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleChangeText: HandleChangeInput = (e) => {
    const target = e.target
    setTextInfo((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleChangeSelect: HandleChangeSelect = (e) => {
    const value = e.target.selectedIndex
    setSelectInfo(value)
  }

  const removeState: RemoveOrCountState = (e) => {
    e.preventDefault()
    setRadioInfo(initialStateRadio)
    setTextInfo(initialStateText)
    setSelectInfo(initialStateSelect)
  }

  const count: RemoveOrCountState = (e) => {
    e.preventDefault()
    const counter = countCalories[radioInfo.gender as keyof ICountCalories]
    const calories = counter(textInfo.weight, textInfo.height, textInfo.age, KFA[selectInfo])
    stateFn(calories)
    sessionStorage.clear()
    nutrientsFn(countNutrientsPercent(radioInfo.goal))
  }

  return (
    <div className={style['calories-form-container']}>
      <Title text='Constructor' />
      <form className={style['calories-form']}>
        <p className={style['calories-form-container__text']}>{PARAGRAPH_TEXT}</p>
        <div className={style['calories-form-wrapper']}>
          <FormRowRadio
            span="What's your gender:"
            genders={GENDERS}
            state={radioInfo.gender}
            onChange={handleChangeRadio}
          />
          {TEXTS.map((text, i) => {
            return (
              <FormRowText
                key={i}
                data={text}
                onChange={handleChangeText}
                state={textInfo[text.name as keyof InitialStateText]}
              />
            )
          })}
          <FormRowSelect span='Lifestyle:' name='lifeStyle' state={selectInfo} onChange={handleChangeSelect} />
          <FormRowRadio span='Your purpose:' goals={GOALS} state={radioInfo.goal} onChange={handleChangeRadio} />
        </div>
        <div className={style['calories-form__btn-wrapper']}>
          <FormButton onClick={count} text='Construct' />
          <FormButton onClick={removeState} text='Reset' />
        </div>
      </form>
    </div>
  )
}
