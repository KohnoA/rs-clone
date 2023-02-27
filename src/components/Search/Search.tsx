<<<<<<< HEAD
import React, {  useCallback } from 'react';
import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchSlice } from '../../store/slices/searchSlice';
import { getSearchList } from '../../store/selectors/searchSelectors';
import { useNavigate } from 'react-router-dom';
=======
import React, { useCallback } from 'react'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { searchSlice } from '../../store/slices/searchSlice'
import { getSearchList } from '../../store/selectors/searchSelectors'
>>>>>>> 1c36f40c8a90152ab654ca3ca9d3339372ee4f44

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [searchValue] = useSelector(getSearchList)
  const navigate = useNavigate()

  const setSearchValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.setSearch(event.target.value))
  }, [])

<<<<<<< HEAD
  const submitHandler = useCallback(
    (event: React.FormEvent) => {
      navigate('/')
      event.preventDefault();
      dispatch(searchSlice.actions.setIsEditing(false))
    },
    []
  )
=======
  const submitHandler = useCallback((event: React.FormEvent) => {
    event.preventDefault()
    dispatch(searchSlice.actions.setIsEditing(false))
  }, [])
>>>>>>> 1c36f40c8a90152ab654ca3ca9d3339372ee4f44

  const resetHandler = useCallback(() => {
    dispatch(searchSlice.actions.resetSearch())
  }, [])

  return (
<<<<<<< HEAD
    <form
      className={styles.search}
      action="#"
      method="GET"
    >
=======
    <form className={styles.search} action='#' method='GET'>
>>>>>>> 1c36f40c8a90152ab654ca3ca9d3339372ee4f44
      <input
        className={styles.search__input}
        type='text'
        placeholder='Carbonara...'
        value={searchValue}
        onChange={setSearchValue}
      />
      <span
        className={
          searchValue ? styles.search__clean : `${styles.search__clean} ${styles.search__hidden}`
        }
        onClick={resetHandler}
      />
      <button
        className={
          searchValue ? styles.search__find : `${styles.search__find} ${styles.search__hidden}`
        }
        type='submit'
        onClick={submitHandler}
      >
        Search
      </button>
    </form>
  )
}

export default Search
