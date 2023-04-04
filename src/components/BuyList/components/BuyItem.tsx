/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAuth } from '../../../hooks/useAuth'
import { useFetchIngredientsListQuery } from '../../../store/sevices/foodService.api'
import Button from '../../Button/Button'
import styles from './BuyItem.module.scss'

interface IBuyItemProps {
  id: string
}

const BuyItem: React.FC<IBuyItemProps> = ({ ...props }: IBuyItemProps) => {
  const { id } = useAuth()
  const { data } = useFetchIngredientsListQuery(props.id)
  const hints = data?.hints

  const removeIngr = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLElement) {
      const listItem = event.target.closest('li') as HTMLLIElement
      const itemId = listItem.id
      const itemArr = JSON.parse(localStorage.getItem(`buyList-${id}`)!)
      const index = itemArr.indexOf(itemId)
      itemArr.splice(index, 1)

      localStorage.setItem(`buyList-${id}`, JSON.stringify(itemArr))

      event.target.closest('li')!.style.display = 'none'
    }
  }

  if (!hints) return null

  return (
    <li id={props.id} className={styles.buyList__item}>
      <div className={styles.someIngr__header}>{hints[0].food.label}</div>
      <div className={styles.ingrCharacteristics__item}>
        <div>
          <span className={styles.someIngrs__item}>{Number(hints[0].food.nutrients.ENERC_KCAL).toFixed(2)}</span> kcal
        </div>
        <div>
          <span className={styles.someIngrs__item}>{Number(hints[0].food.nutrients.PROCNT).toFixed(2)}</span> Protein
        </div>
        <div>
          <span className={styles.someIngrs__item}>{Number(hints[0].food.nutrients.FAT).toFixed(2)}</span> Fat
        </div>
        <div>
          <span className={styles.someIngrs__item}>{Number(hints[0].food.nutrients.CHOCDF).toFixed(2)}</span> Carbs
        </div>
      </div>
      <Button
        text={'X'}
        additionalClasses={styles.buyList__btn}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => removeIngr(event)}
      />
    </li>
  )
}

export default BuyItem
