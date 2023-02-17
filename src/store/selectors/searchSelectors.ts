import { RootState } from '../store'

export const getSearchList = (state: RootState) => {
    return state.search.searchList
}