import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'
import { useFetchIngredientsQuery } from '../../sevices/foodService.api'
import { getIngrList } from '../../store/selectors/ingrSearchSelector'
import { ingrSearchSlice } from '../../store/slices/ingrSearchSlice'
import SearchInput from '../SearchInput/SearchInput'
import styles from './BuyList.module.scss'

const BuyList = () => {
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
                  <li className={styles.buyList__searchItem} key={i}>
                    <div>{ingr.food.label}</div>
                    <div className={styles.ingrCharacteristics}>
                      <div>
                        <span className={styles.ingrs__item}>
                          {Number(ingr.food.nutrients.ENERC_KCAL).toFixed(2)}
                        </span>{' '}
                        kcal
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>
                          {Number(ingr.food.nutrients.PROCNT).toFixed(2)}
                        </span>{' '}
                        Protein
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>
                          {Number(ingr.food.nutrients.FAT).toFixed(2)}
                        </span>{' '}
                        Fat
                      </div>
                      <div>
                        <span className={styles.ingrs__item}>
                          {Number(ingr.food.nutrients.CHOCDF).toFixed(2)}
                        </span>{' '}
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
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  )
}

export default BuyList
