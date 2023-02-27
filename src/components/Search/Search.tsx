import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchSlice } from '../../store/slices/searchSlice'
import { getSearchList } from '../../store/selectors/searchSelectors'
import SearchInput from '../SearchInput/SearchInput'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [searchValue] = useSelector(getSearchList)
  const navigate = useNavigate()

  const setSearchValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.setSearch(event.target.value))
  }, [])

  const submitHandler = useCallback((event: React.FormEvent) => {
    navigate('/')
    event.preventDefault()
    dispatch(searchSlice.actions.setIsEditing(false))
  }, [])

  const resetHandler = useCallback(() => {
    dispatch(searchSlice.actions.resetSearch())
  }, [])

  return (
    <SearchInput
      value={searchValue}
      onChange={setSearchValue}
      onClickReset={resetHandler}
      onClickHandler={submitHandler}
      placeholder='Carbonara...'
    />
  )
}

export default Search
