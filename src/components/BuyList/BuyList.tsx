/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'
import useDebounce from '../../hooks/useDebounce'
import { getIngrList } from '../../store/selectors/ingrSearchSelector'
import { useFetchIngredientsQuery } from '../../store/sevices/foodService.api'
import { ingrSearchSlice } from '../../store/slices/ingrSearchSlice'
import SearchInput from '../Search/SearchInput/SearchInput'
import styles from './BuyList.module.scss'
import BuyItem from './components/BuyItem'

const BuyList = () => {
  const { id } = useAuth()

  const [checked, setChecked] = useState<string[]>(JSON.parse(localStorage.getItem(`buyList-${id}`)!) ?? [])
  const [searchValue] = useSelector(getIngrList)
  const dispatch = useDispatch()

  const debounced = useDebounce(searchValue)
  const [dropDown, setDropDown] = useState(false)

  const { error, data } = useFetchIngredientsQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  })

  const ingrs = data?.hints

  const setSearchValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ingrSearchSlice.actions.setSearch(event.target.value))
  }, [])

  const submitHandler = useCallback((event: React.FormEvent) => {
    event.preventDefault()
    dispatch(ingrSearchSlice.actions.setIsEditing(false))
  }, [])

  const resetHandler = useCallback(() => {
    dispatch(ingrSearchSlice.actions.resetSearch())
  }, [])

  useEffect(() => {
    setDropDown(debounced.length > 3 && ingrs?.length! > 0)
  }, [debounced, data])

  const addIngr = (event: React.MouseEvent<HTMLLIElement>) => {
    if (event.target instanceof HTMLElement) {
      setDropDown(false)
      resetHandler()
      const listItem = event.target.closest('li') as HTMLLIElement
      const serializedList = localStorage.getItem(`buyList-${id}`) ?? '[]'
      const checkedList: string[] = JSON.parse(serializedList)

      checkedList.push(listItem.id)
      const result = JSON.stringify(checkedList)

      localStorage.setItem(`buyList-${id}`, result)
    }
    const data = JSON.parse(localStorage.getItem(`buyList-${id}`)!)
    setChecked([...data])

    useEffect(() => {
      setChecked([...data])
    }, checked)
  }

  return (
    <div className={styles.buyList}>
      <h1>Buy List</h1>
      <div className={styles.buyList__wrapper}>
        <div className={styles.searchDropDown__wrapper}>
          <div className={styles.buyList__search}>
            <SearchInput
              value={searchValue}
              onChange={setSearchValue}
              onClickReset={resetHandler}
              onClickHandler={submitHandler}
              placeholder='Rice...'
            />
          </div>
          {error ? (
            <div className={styles.buyList__error}>Ooops, error has occured... Try again</div>
          ) : (
            dropDown && (
              <ul className={styles.buyList__searchDropDown}>
                {ingrs?.map((ingr, i) => (
                  <li className={styles.buyList__searchItem} key={i} id={ingr.food.foodId} onClick={addIngr}>
                    <div>{ingr.food.label}</div>
                    <div className={styles.ingrCharacteristics}>
                      <div>
                        <span className={styles.ingrs__item}>{Number(ingr.food.nutrients.ENERC_KCAL).toFixed(2)}</span>{' '}
                        kcal
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>{Number(ingr.food.nutrients.PROCNT).toFixed(2)}</span>{' '}
                        Protein
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>{Number(ingr.food.nutrients.FAT).toFixed(2)}</span> Fat
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>{Number(ingr.food.nutrients.CHOCDF).toFixed(2)}</span>{' '}
                        Carbs
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
        <ul className={styles.buyListList}>
          {checked.map((id, i) => {
            return <BuyItem key={id + i} id={id} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default BuyList
