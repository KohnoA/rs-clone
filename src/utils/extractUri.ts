import { IRecipesData } from '../types/types';

export const extractUri = (i: number, arr: IRecipesData[]): string => {
  const mainLink = arr[i].recipe.uri
  const uri = mainLink.slice(mainLink.indexOf('_') + 1)
  return(uri)
}