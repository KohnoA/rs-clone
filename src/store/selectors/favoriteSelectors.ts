import { RootState } from '../store';

export const getIsFavorite = (state: RootState, id: string) => {
  return state.favorite.favoriteList.includes(id)
}

export const getFavoriteList = (state: RootState) => {
  return state.favorite.favoriteList
}
