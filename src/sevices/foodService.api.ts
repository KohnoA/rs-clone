import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../constants/foodApi';
import { IFoodApi } from '../models/IFood';
import { IRecipes } from '../models/IRecipes';
import { IRecupesSearch } from '../types/types';

export const foodAPI = createApi({
  reducerPath: 'foodAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${API.DOMAIN}` }),
  endpoints: (build) => ({

    fetchAllFood: build.query<IFoodApi, number>({
      query: (session?) => ({
        url: `/${API.FOOD}`,
        params: {
            session: session,
            ['app_id']: API.ID_FOOD,
            ['app_key']: API.API_KEY_FOOD,
        },
      }),
    }),

    fetchRecipesStart: build.query<IRecipes, string>({
        query: () => ({
            url: `/${API.RECIPES}`,
            params: {
                type: API.TYPE,
                ['app_id']: API.ID_RECIPES,
                ['app_key']: API.API_KEY_RECIPES,
                imageSize: API.IMAGE_SIZE,
                random: true,
            },
        }),
    }),

    fetchRecipesWithParams: build.query<IRecipes, string>({
        query: (type) => ({
            url: `/${API.RECIPES}`,
            params: {
                type: API.TYPE,
                ['app_id']: API.ID_RECIPES,
                ['app_key']: API.API_KEY_RECIPES,
                imageSize: API.IMAGE_SIZE,
                mealType: type,
            },
        }),
    }),

    fetchRecipesWithParamsRandom: build.query<IRecipes, string>({
      query: (type) => ({
          url: `/${API.RECIPES}`,
          params: {
              type: API.TYPE,
              ['app_id']: API.ID_RECIPES,
              ['app_key']: API.API_KEY_RECIPES,
              random: true,
              mealType: type,
          },
      }),
  }),

    fetchRecipes: build.query<IRecupesSearch, string>({
      query:(recipe: string) => ({
        url: `/${API.RECIPES}`,
        params: {
          type: API.TYPE,
          q: recipe,
          ['app_id']: API.ID_RECIPES,
          ['app_key']: API.API_KEY_RECIPES,
        },
      }),
    }),

  }),
});

export const {useFetchAllFoodQuery, useFetchRecipesQuery, useFetchRecipesStartQuery, useFetchRecipesWithParamsQuery} = foodAPI
