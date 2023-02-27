import { RootState } from '../store'

export const getIngrList = (state: RootState): [string, boolean] => {
  return [state.searchIngr.searchIngr, state.searchIngr.isEditing]
}
