import { RootState } from '../store'

export const getSearchList = (state: RootState): [string, boolean] => {
    return [state.search.search, state.search.isEditing]
}
