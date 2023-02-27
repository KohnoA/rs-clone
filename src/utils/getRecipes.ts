import { MainRequestsQuery } from '../constants/constants'
import { IRecipesData } from '../types/types'
import axios, { AxiosError } from 'axios'
import { RECIPES, TYPE, ID_RECIPES, API_KEY_RECIPES, IMAGE_SIZE } from '../constants/foodApi'

export const getRecipes = async (query: MainRequestsQuery, count: number): Promise<IRecipesData[] | undefined> => {
  try {
    const { data } = await axios.get(
      `https://api.edamam.com/api/${RECIPES}?type=${TYPE}&app_id=${ID_RECIPES}&app_key=${API_KEY_RECIPES}&${query}&imageSize=${IMAGE_SIZE}&random=true`,
    )
    return data.hits.slice(0, count)
  } catch (error: unknown) {
    if (error instanceof AxiosError) console.error(error.message)
  }
}
